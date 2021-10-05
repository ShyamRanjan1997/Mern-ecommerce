import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import userReducers from "./user.reducers";
import cateroryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import orderReducer from "./order.reducer";

const rootReducer = combineReducers({
    auth : authReducers,
    user : userReducers,
    category : cateroryReducer,
    product : productReducer,
    order : orderReducer


});

export default rootReducer;