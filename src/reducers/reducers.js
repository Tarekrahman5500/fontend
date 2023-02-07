import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer.js";
import productReducer from "./productReducer.js";
import authReducer from "./authReducer.js";
import cartReducer from "./cartReducer.js";

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
})

export default rootReducer