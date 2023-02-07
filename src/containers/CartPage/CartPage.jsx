import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Layout from "../../component/Layout/layout.jsx";
import CardIndex from "../../component/ui/card/CardIndex.jsx";
import CartItem from "./cartItem/cartItem.jsx";
import {addToCart, removeCartItem} from "../../actions/action.js";
import './style.css'

const CartPage = (props) => {
    const cart = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);
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
            <CardIndex
                headerLeft={`My Cart`}
                headerRight={<div>Deliver to</div>}
            >
                {Object.keys(cartItems).map((key, index) =>
                    <CartItem
                        key={key}
                        cartItem={cartItems[key]}
                        onQuantityInc={onQuantityIncrement}
                        onQuantityDec={onQuantityDecrement}
                        onRemoveCartItem={onRemoveCartItem}
                    />
                )}

            </CardIndex>
        </Layout>
    );
};

export default CartPage;