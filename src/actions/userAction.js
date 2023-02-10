import axios from "../helpers/axios.js";
import {cartConstants, userConstants} from "./constants.js";


export const getAddress = () => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`user/getaddress`);
            dispatch({type: userConstants.GET_USER_ADDRESS_REQUEST});
            if (res.status === 200) {
                // console.log(res)
                const {
                    userAddress: {address},
                } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: {address},
                });
            } else {
                const {error} = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_FAILURE,
                    payload: {error},
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: userConstants.GET_USER_ADDRESS_FAILURE,
                payload: {error: error.response.data.error},
            });
        }
    };
};

export const addAddress = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`user/address/create`, {payload});
            dispatch({type: userConstants.ADD_USER_ADDRESS_REQUEST});
            if (res.status === 201) {
                console.log(res);
                const {
                    address: {address},
                } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                    payload: {address},
                });
            } else {
                const {error} = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: {error},
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: userConstants.ADD_USER_ADDRESS_FAILURE,
                payload: {error: error.response.data.error},
            });
        }
    };
};

export const addOrder = (payload) => {

    return async (dispatch) => {
        try {
            const res = await axios.post(`addOrder`, payload);
            dispatch({type: userConstants.ADD_USER_ORDER_REQUEST});
            //  console.log(res)
            if (res.status === 201) {
                console.log(res);
                const {order} = res.data;
                dispatch({
                    type: cartConstants.RESET_CART,
                });
                dispatch({
                    type: userConstants.ADD_USER_ORDER_SUCCESS,
                    payload: {order},
                });

            } else {
                const {error} = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: {error},
                });
            }
        } catch (error) {
            dispatch({
                type: userConstants.ADD_USER_ORDER_FAILURE,
                payload: {error: error.response.data.error},
            });
        }
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`getOrders`);
            dispatch({type: userConstants.GET_USER_ORDER_REQUEST});
            if (res.status === 200) {
                console.log(res);
                const {orders} = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_SUCCESS,
                    payload: {orders},
                });
            } else {
                const {error} = res.data;
                dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: {error},
                });
            }
        } catch (error) {
            console.log(error);
             dispatch({
                    type: userConstants.GET_USER_ORDER_FAILURE,
                    payload: {error: error.response.data.error},
                });
        }
    };
};