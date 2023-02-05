import {productConstants} from "../actions/constants";

const initialState = {
    products: [],
    priceRange: {},
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: [],
    },
    pageRequest: false,
    page: {},
    error: null,
    productDetails: {},
    loading: false,
};

export default (state = initialState, action) => {
    if (action.type === productConstants.GET_PRODUCTS_BY_SLUG) {
        state = {
            ...state,
            products: action.payload.products,
            productsByPrice: {
                ...action.payload.productsByPrice
            }
        }
    } else if (action.type === productConstants.GET_PRODUCT_PAGE_REQUEST) {
        state = {
            ...state,
            pageRequest: true,
        };
    } else if (action.type === productConstants.GET_PRODUCT_PAGE_SUCCESS) {
        state = {
            ...state,
            page: action.payload.page,
            pageRequest: false,
        };
    } else if (action.type === productConstants.GET_PRODUCT_PAGE_FAILURE) {
        state = {
            ...state,
            pageRequest: false,
            error: action.payload.error,
        };
    } else if (action.type === productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST) {
        state = {
            ...state,
            loading: true,
        };
    } else if (action.type === productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS) {
        state = {
            ...state,
            loading: false,
            productDetails: action.payload.productDetails,
        };
    } else if (action.type === productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE) {
        state = {
            ...state,
            loading: false,
            error: action.payload.error,
        };
    }
    return state
}
