import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reeducers/categories.reducers";
import ProductReducer from "./reeducers/products.reducers";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,

});

export default createStore(RootReducer);