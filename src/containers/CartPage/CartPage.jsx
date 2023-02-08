import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../component/Layout/layout.jsx";
import CardIndex from "../../component/ui/card/CardIndex.jsx";
import CartItem from "./cartItem/cartItem.jsx";
import {addToCart, getCartItems, removeCartItem} from "../../actions/action.js";
import './style.css'
import {MaterialButton} from "../../component/MaterialUI/materialUI.jsx";
import {useNavigate} from "react-router-dom";

const CartPage = (props) => {
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth);
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
        }
    }, [auth.authenticate]);
    const onQuantityIncrement = (_id, qty) => {
        //console.log({_id, qty});
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, -1));
    };

    const onRemoveCartItem = (_id) => {
        dispatch(removeCartItem({productId: _id}));
    };
    return (
        <Layout>
            <div className="cartContainer" style={{alignItems: "flex-start"}}>
                <CardIndex
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                    style={{width: "calc(100% - 400px)", overflow: "hidden"}}
                >
                    {Object.keys(cartItems).map((key, index) => (
                        <CartItem
                            key={key}
                            cartItem={cartItems[key]}
                            onQuantityInc={onQuantityIncrement}
                            onQuantityDec={onQuantityDecrement}
                            onRemoveCartItem={onRemoveCartItem}
                        />
                    ))}
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            background: "#ffffff",
                            justifyContent: "flex-end",
                            boxShadow: "0 0 10px 10px #eee",
                            padding: "10px 0",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{width: "250px"}}>
                            <MaterialButton
                                title="PLACE ORDER"
                                onClick={() => navigate(`/checkout`)}
                            />
                        </div>
                    </div>

                </CardIndex>
                <CardIndex headerLeft='Price'
                           style={{
                               width: '380px'
                           }}>

                </CardIndex>
            </div>
        </Layout>
    );
};

export default CartPage;