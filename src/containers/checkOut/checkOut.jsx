import React, {useEffect, useState} from 'react';
import './style.css'
import CardIndex from "../../component/ui/card/CardIndex.jsx";
import AddressForm from "./AddressForm.jsx";
import {MaterialButton, MaterialInput} from "../../component/MaterialUI/materialUI.jsx";
import Layout from "../../component/Layout/layout.jsx";
import {getAddress} from "../../actions/action.js";
import {useDispatch, useSelector} from "react-redux";

const CheckoutStep = (props) => {
    return (<div className="checkoutStep">
        <div onClick={props.onClick} className={`checkoutHeader ${props.active && 'active'}`}>
            <div>
                <span className="stepNumber">{props.stepNumber}</span>
                <span className="stepTitle">{props.title}</span>
            </div>
        </div>
        {props.body && props.body}
    </div>);
}
const CheckOut = (props) => {
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState([]);
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const dispatch = useDispatch();

    const onAddressSubmit = () => {

    }
    const selectAddress = (addr) => {
        const updatedAddress = address.map((adr) =>
            adr._id === addr._id
                ? {...adr, selected: true}
                : {...adr, selected: false}
        );
        setAddress(updatedAddress);
    };
    const confirmDeliveryAddress = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);

    };

    useEffect(() => {
        auth.authenticate && dispatch(getAddress());
    }, [auth.authenticate]);
    useEffect(() => {
        const address = user.address.map((adr) => ({
            ...adr, selected: false, edit: false,
        }));
        setAddress(address)
    }, [user.address])


    return (<Layout>
        <div className="cartContainer" style={{alignItems: 'flex-start'}}>
            <div className="checkoutContainer">

                {/* check if user logged in or not */}
                <CheckoutStep
                    stepNumber={'1'}
                    title={'LOGIN'}
                    active={!auth.authenticate}
                    body={auth.authenticate ? <div className="loggedInId">
                        <span style={{fontWeight: 500}}>{auth.user.fullName}</span>
                        <span style={{margin: '0 5px'}}>{auth.user.email}</span>
                    </div> : <div>
                        <MaterialInput label="Email"/>
                    </div>}

                />

                <CheckoutStep
                    stepNumber={'2'}
                    title={'DELIVERY ADDRESS'}
                    active={!confirmAddress}
                    key={auth.user.email}
                    body={<>

                        {   confirmAddress ?  JSON.stringify(selectedAddress)
                            :
                            address.map(adr => <div key={adr._id} className="flexRow addressContainer">
                            <div>
                                <input name="address" type="radio" onClick={() => selectAddress(adr)}/>
                            </div>
                            <div className="flexRow sb addressinfo">
                                <div>
                                    <div>
                                        <span>{adr.name}</span>
                                        <span>{adr.addressType}</span>
                                        <span>{adr.mobileNumber}</span>
                                    </div>
                                    <div>
                                        {adr.address}
                                    </div>
                                    {
                                        adr.selected && <MaterialButton
                                            title="DELIVERY HERE"
                                            style={{
                                                width: '250px'
                                            }}
                                            onClick={() =>confirmDeliveryAddress(adr)}
                                        />

                                    }

                                </div>
                                {adr.selected && <div>edit</div>}
                            </div>
                        </div>)}

                    </>}
                />

                {/* AddressForm */}
                {confirmAddress ? null : newAddress ? <AddressForm
                    onSubmitForm={onAddressSubmit}
                    onCancel={() => {
                    }}
                /> : <CheckoutStep
                    stepNumber={'+'}
                    title={'Add New Address'}
                    active={false}
                    onClick={() => setNewAddress(true)}
                />

                }

                <CheckoutStep
                    stepNumber={'3'}
                    title={'ORDER SUMMARY'}
                />

                <CheckoutStep
                    stepNumber={'4'}
                    title={'PAYMENT OPTIONS'}
                />

            </div>

            <CardIndex
                headerLeft={'Price'}
                style={{maxWidth: '380px'}}
            >

            </CardIndex>
        </div>


    </Layout>)
};

export default CheckOut;