import {useEffect, useState} from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.jsx";
import ProductListPage from "./containers/productListPage/productListPage.jsx";
import {useDispatch, useSelector} from "react-redux";
import {isUserLoggedIn} from "./actions/authAction.js";
import ProductDetailsPage from "./containers/productDetailsPage/productDetailsPage.jsx";
import CartPage from "./containers/CartPage/CartPage.jsx";
import {updateCart} from "./actions/cartAction.js";
import CheckOut from "./containers/checkOut/checkOut.jsx";
import OrderPage from "./containers/OrderPage/orderPage.jsx";
import OrderDetailsPage from "./containers/orderDetailsPage/orderDetailsPage.jsx";

function App() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, [auth.authenticate])

    useEffect(() => {
       // console.log("App.js - updateCart");
        dispatch(updateCart());
    }, [auth.authenticate]);

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/:slug" element={<ProductListPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/account/orders" element={<OrderPage/>} />
             <Route path="/order_details/:orderId" element={<OrderDetailsPage/>} />
            {/*<Route path="/products" element={<Products/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/category" element={<Category/>}/>*/}
        </Routes>
    )
}

export default App
