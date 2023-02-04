import React, {useEffect} from 'react';
import './style.css'
import {getProductPage} from "../../../actions/action.js";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import getParams from "../../../utils/getParams.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import CardIndex from "../../../component/ui/card/CardIndex.jsx";

const ProductPage = (props) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const location = useLocation()
    const {page} = product
    useEffect(() => {
        const params = getParams(location.search)
        //  const payload = {params}
        dispatch(getProductPage({params}))
    }, [])
    // console.log(page)
    return (
        <div style={{margin: '0 10px'}}>
            <h3 key={page._id}>{page.title} Store</h3>
            <Carousel
                renderThumbs={() => {
                }}
            >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <Link to={banner.navigateTo} key={index} style={{display: 'block'}}>
                            <img src={banner.img} alt={''}/>
                        </Link>
                    )
                }
            </Carousel>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>
                {
                    page.products && page.products.map((product, index) =>
                        <CardIndex
                            key={index}
                            style={{
                                width: '400px',
                                height: '200px',
                                margin: '0 5px'
                            }}
                        >
                            <img style={{width: '100%',height: '100%'}} src={product.img} alt={''}/>
                        </CardIndex>
                    )
                }
            </div>
        </div>
    );
};

export default ProductPage;