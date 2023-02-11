import React, {useEffect} from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import CardIndex from "../../../component/ui/card/CardIndex.jsx";
import {getProductsBySlug} from "../../../actions/productAction.js";
import {Link, useLocation, useParams} from "react-router-dom";
import {BiRupee} from "react-icons/bi";
import getParams from "../../../utils/getParams.js";

const ClothAndAccessories = () => {
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();
     const params = useParams();

    useEffect(() => {
        console.log(params)
        dispatch(getProductsBySlug(params.slug));
    }, []);

    return (
        <div style={{padding: "10px"}}>
            <CardIndex
                style={{
                    boxSizing: "border-box",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {product.products.map((product, index) => (
                    <div className="caContainer" key={index}>
                        <Link
                            className="caImgContainer"
                            to={`/${product.slug}/${product._id}/p`}
                        >
                            <img src={product.productPictures[0].img}/>
                        </Link>
                        <div>
                            <div className="caProductName">{product.name}</div>
                            <div className="caProductPrice">
                                <BiRupee/>
                                {product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </CardIndex>
        </div>
    )
};

export default ClothAndAccessories;