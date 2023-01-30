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
                    ... action.payload.productsByPrice
                 }
             }
         }
         return state
}
