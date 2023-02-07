import { cartConstants } from "../actions/constants";

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     price: 200,
        //     qty: 1,
        // }
    },
    updatingCart: false,
    error: null
};

export default (state = initState, action) => {
    if (action.type === cartConstants.ADD_TO_CART_REQUEST) {
        state = {
            ...state,
            updatingCart: true
        }
    } else if (action.type === cartConstants.ADD_TO_CART_SUCCESS) {
        state = {
            ...state,
            cartItems: action.payload.cartItems,
            updatingCart: false
        }
    } else if (action.type === cartConstants.ADD_TO_CART_FAILURE) {
        state = {
            ...state,
            updatingCart: false,
            error: action.payload.error
        }
    } else if (action.type === cartConstants.RESET_CART) {
        state = {
            ...initState
        }
    }
    return state;
}