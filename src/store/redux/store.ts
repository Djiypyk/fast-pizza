import {combineReducers, configureStore, Dispatch} from '@reduxjs/toolkit'
import filter from "./slices/filterSlice";
import pizza from "./slices/pizzaSlice";
import cart from "./slices/cartSlice";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    filter,
    pizza,
    cart,
})

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;

