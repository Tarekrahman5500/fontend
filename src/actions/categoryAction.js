import axios from "../helpers/axios.js";
import {categoryConstants} from "./constants.js";

export const getAllCategory = () => {
    return async dispatch => {
        try {
            dispatch({type: categoryConstants.GET_ALL_CATEGORIES_REQUEST})
            const res = await axios.get(`category/getcategory`)
          //  console.log(res)
            if (res.status === 200) {
                const {categoryList} = res.data
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: {categories: categoryList}
                })
            }
        } catch (err) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: {error: err.response.data.error}
            })
        }
    }
}

