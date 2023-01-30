import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer.js";
import productReducer from "./productReducer.js";
const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
})

export default rootReducer