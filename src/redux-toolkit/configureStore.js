import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlide from "./CouterSlide";
import globalSlide from "./globalSlide";

const reducer = combineReducers({
    counter: counterSlide,
    global: globalSlide,
});
const store = configureStore({
    reducer,
});
export default store;
