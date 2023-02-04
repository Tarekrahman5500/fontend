import React from 'react';
import Layout from "../../component/Layout/layout.jsx";
import './style.css'
import ProductStore from "./productStore/productStore.jsx";
import {useLocation} from "react-router-dom";
import getParams from "../../utils/getParams.js";
import ProductPage from "./productPage/productPage.jsx";

const ProductListPage = (props) => {
     const location = useLocation()

    const renderProduct = () => {
       //console.log(location)
      const params =getParams( location.search)
       // console.log(params)
        let content = null
        if (params.type === 'store') {
                 content = <ProductStore {...props}/>
        }
        else if (params.type === 'page') {
                  content = <ProductPage {...props}/>
        }
        return content
    }

    return (
        <Layout>
            {renderProduct()}
        </Layout>
    );
};

export default ProductListPage;