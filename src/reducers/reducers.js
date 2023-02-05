import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer.js";
import productReducer from "./productReducer.js";
import authReducer from "./authReducer.js";

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    auth: authReducer,
})

export default rootReducer