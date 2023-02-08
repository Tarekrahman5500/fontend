import {userConstants} from "../actions/constants.js";

const initialState = {
    address: [],
    orders: [],
    orderDetails: {},
    error: null,
    loading: false,
    orderFetching: false,
    placedOrderId: null,

}

export default (state = initialState, action) => {
    if (action.type === userConstants.GET_USER_ADDRESS_REQUEST) {
        state = {
            ...state,
            loading: true,
        };
    } else if (action.type === userConstants.GET_USER_ADDRESS_SUCCESS) {
        state = {
            ...state,
            address: action.payload.address,
            loading: false,
        };
    } else if (action.type === userConstants.GET_USER_ADDRESS_FAILURE) {
        state = {
            ...state,
            loading: false,
            error: action.payload.error,
        };
    } else if (action.type === userConstants.ADD_USER_ADDRESS_REQUEST) {
        state = {
            ...state,
            loading: true,
        };
    } else if (action.type === userConstants.ADD_USER_ADDRESS_SUCCESS) {
        state = {
            ...state,
            address: action.payload.address,
            loading: false,
        };
    } else if (action.type === userConstants.ADD_USER_ADDRESS_FAILURE) {
        state = {
            ...state,
            loading: false,
            error: action.payload.error,
        };
    } else if (action.type === userConstants.GET_USER_ORDER_REQUEST) {
        state = {
            ...state,
            orderFetching: true,
        };
    } else if (action.type === userConstants.GET_USER_ORDER_SUCCESS) {
        state = {
            ...state,
            orders: action.payload.orders,
            orderFetching: false,
        };
    } else if (action.type === userConstants.GET_USER_ORDER_FAILURE) {
        state = {
            ...state,
            error: action.payload.error,
            orderFetching: false,
        };
    } else if (action.type === userConstants.GET_USER_ORDER_DETAILS_REQUEST) {
    } else if (action.type === userConstants.GET_USER_ORDER_DETAILS_SUCCESS) {
        state = {
            ...state,
            orderDetails: action.payload.order,
        };
    } else if (action.type === userConstants.GET_USER_ORDER_DETAILS_FAILURE) {
    } else if (action.type === userConstants.ADD_USER_ORDER_SUCCESS) {
        state = {
            ...state,
            placedOrderId: action.payload.order._id,
        };
    }

    return state;
};