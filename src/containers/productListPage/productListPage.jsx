import React, {useEffect, useState} from 'react';
import Layout from "../../component/Layout/layout.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductsBySlug} from "../../actions/action.js";
import {useParams} from "react-router-dom";
import './style.css'

const ProductListPage = (props) => {
    const dispatch = useDispatch()
    const params = useParams();
    //console.log(params)
    const product = useSelector(state => state.product)
    // console.log(product)
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000,
    })
    useEffect(() => {
        // console.log(params.slug)
        dispatch(getProductsBySlug(params.slug))
    }, [])
    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div key={key} className="card">
                            <div className="card-header">
                                <div>{params.slug.split('-')[0]} mobile under {priceRange[key]}K</div>
                                <button>view all</button>
                            </div>
                            <div style={{display: 'flex'}}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div key={product.name} className="product-container">
                                            <div className="productImageContainer">
                                                <img
                                                    src={product.productPictures[0].img}
                                                    alt=""/>
                                            </div>
                                            <div className="productInfo">
                                                <div style={{margin: '5px 0'}}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                                    <span>335</span>
                                                </div>
                                                <div className="productPrice">TK{product.price}</div>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    )
                })
            }

        </Layout>
    );
};

export default ProductListPage;