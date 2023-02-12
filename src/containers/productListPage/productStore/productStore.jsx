import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getProductsBySlug} from "../../../actions/action.js";
import './style.css'
import CardIndex from "../../../component/ui/card/CardIndex.jsx";
import {MaterialButton} from "../../../component/MaterialUI/materialUI.jsx";
import Rating from "../../../component/ui/rating.jsx";
import Price from "../../../component/ui/price.jsx";

const ProductStore = (props) => {
    const dispatch = useDispatch()
    const params = useParams();
    //console.log(params)
    const product = useSelector(state => state.product)
    const priceRange = product.priceRange;

    //params.slug.split('-')[0]} mobile under
    useEffect(() => {
        // console.log(params.slug)
        dispatch(getProductsBySlug(params.slug))
    }, [params.slug])
    return (<>
        {Object.keys(product.productsByPrice).map((key, index) => {
            return (<CardIndex
                key={key}
                headerLeft={`${params.slug.split('-')[0]} mobile under ${priceRange[key]}`}
                headerRight={<MaterialButton
                    title={"VIEW ALL"}
                    style={{
                        width: "96px",
                    }}
                    bgColor="#2874f0"
                    fontSize="12px"
                />}
                style={{
                    width: "calc(100% - 40px)", margin: "20px",
                }}

            >

                <div style={{display: 'flex'}}>
                    {product.productsByPrice[key].map(product => <Link style={{
                        display: 'block'
                    }} to={`/${product.slug}/${product._id}/p`} key={product.name}
                                                                       className="product-container">
                        <div className="productImageContainer">
                            <img
                                src={product.productPictures[0].img}
                                alt=""/>
                        </div>
                        <div className="productInfo">
                            <div style={{margin: '5px 0'}}>{product.name}</div>
                            <div>
                                <Rating value="4.3"/>&nbsp;
                                <span
                                    style={{
                                        color: "#777", fontWeight: "500", fontSize: "12px",
                                    }}
                                >
                                      (3353)
                                       </span>
                            </div>
                            <Price value={product.price} />
                        </div>
                    </Link>)}

                </div>
            </CardIndex>)
        })}
    </>);
};

export default ProductStore;