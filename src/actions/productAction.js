import axios from "../helpers/axios"
import {productConstants} from "./constants";

export const getProductsBySlug = (slug) => {
    // console.log('here')
    return async dispatch => {
        try {
            const res = await axios.get(`products/${slug}`);
            //   console.log(res)
            if (res.status === 200) {
                dispatch({
                    type: productConstants.GET_PRODUCTS_BY_SLUG,
                    payload: res.data
                });
            }
            /* else {
                // dispatch({
                //     type:
                // })
            }*/
            //}
        } catch (err) {
            console.error(err.response.data.error)
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const {cid, type} = payload.params;
            const res = await axios.get(`page/${cid}/${type}`);
            // console.log(res)
            dispatch({type: productConstants.GET_PRODUCT_PAGE_REQUEST});
            if (res.status === 200) {
                const {page} = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: {page}
                });
            } else {
                const {error} = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: {error}
                });
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                payload: {error: error.response.data.error}
            });
        }

    }
}
