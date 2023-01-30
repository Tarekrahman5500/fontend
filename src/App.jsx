import {useState} from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.jsx";
import ProductListPage from "./containers/productListPage/productListPage.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
             <Route path="/:slug" element={<ProductListPage/>}/>
            {/*<Route path="/products" element={<Products/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/category" element={<Category/>}/>*/}
        </Routes>
    )
}

export default App
