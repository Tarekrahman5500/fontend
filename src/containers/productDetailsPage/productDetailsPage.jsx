import React, {useEffect} from 'react';
import Layout from "../../component/Layout/layout.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductDetailsById} from "../../actions/productAction.js";

const ProductDetailsPage = () => {
    const dispatch = useDispatch()
    const params = useParams();
   // console.log(params.productId)
    const product = useSelector(state => state.product)

    useEffect(()=> {

        dispatch(getProductDetailsById({params}))
    },[params.productId])
    return (
        <Layout>
            <div>
                {product.productDetails.name}
            </div>
        </Layout>
    );
};

export default ProductDetailsPage;