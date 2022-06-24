import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filter from "./filter/slice";
import pizza from "./pizza/slice";
import cart from "./cart/slice";
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

