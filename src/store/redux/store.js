import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlice";


const rootReducer = combineReducers({
    filter,
    pizza,
})

export const store = configureStore({
    reducer: rootReducer,
})

// @ts-ignore
window.store = store;

