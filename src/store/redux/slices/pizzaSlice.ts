import {Action, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
        const {order, sortBy, sortCategory, sortByValue, currentPage} = params
        const {data} = await axios.get(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
            sortCategory}${sortByValue}&sortBy=${sortBy}&order=${order}`)
        return data
    }
)

type PizzaT = {
    id: string
    title: string
    price: number
    imageUrl: string
    sizes: number[]
    types: number[]
    rating: number
}

interface PizzaI {
    items: PizzaT[]
    status: 'loading' | 'success' | 'error'
}

const initialState: PizzaI = {
    items: [],
    status: 'loading', // loading | success | error
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },

    },
    extraReducers: {
        [fetchPizzas.pending]: (state: PizzaI) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state: PizzaI, action: PayloadAction<any>) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state: PizzaI) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const selectPizza = (state: RootState) => state.pizza
export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer