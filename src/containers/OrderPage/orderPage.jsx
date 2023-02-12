import React, {useEffect} from 'react';
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/userAction.js";
import {BiRupee} from "react-icons/bi";
import {IoIosArrowForward} from "react-icons/io";
import {Breed} from "../../component/MaterialUI/materialUI.jsx";
import Layout from "../../component/Layout/layout.jsx";
import CardIndex from "../../component/ui/card/CardIndex.jsx";
import {Link} from "react-router-dom";

const OrderPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    console.log(user.orders);
    return (
        <Layout>
            <div style={{maxWidth: "1160px", margin: "5px auto"}}>
                <Breed
                    breed={[
                        {name: "Home", href: "/"},
                        {name: "My Account", href: "/account"},
                        {name: "My Orders", href: "/account/orders"},
                    ]}
                    breedIcon={<IoIosArrowForward/>}
                />
                {user.orders.map((order) => {
                    return order.items.map((item, index) => (
                        <CardIndex style={{margin: "5px 0"}} key={index}>
                            <Link
                                to={`/order_details/${order._id}`}
                                className="orderItemContainer"
                            >
                                <div className="orderItemContainer" key={index}>
                                    <div className="orderImgContainer">
                                        <img
                                            key={index}
                                            className="orderImg"
                                            src={
                                                item.productId.productPictures[0].img
                                            }
                                            alt=""/>
                                    </div>
                                    <div className="orderRow">
                                        <div className="orderName">{item.productId.name}</div>
                                        <div className="orderPrice" key={index}>
                                            <BiRupee/>
                                            {item.payablePrice}
                                        </div>
                                        <div>{order.paymentStatus}</div>
                                    </div>
                                </div>
                            </Link>
                        </CardIndex>
                    ));
                })}
            </div>
        </Layout>
    );
}

export default OrderPage;