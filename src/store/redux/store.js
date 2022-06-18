import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlice";
import cart from "./slices/cartSlice";


const rootReducer = combineReducers({
    filter,
    pizza,
    cart,
})

export const store = configureStore({
    reducer: rootReducer,
})

// @ts-ignore
window.store = store;

