import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import {SortT} from "./filterSlice";

type PizzaT = {
    id: string
    title: string
    price: number
    imageUrl: string
    sizes: number[]
    types: number[]
    rating: number
}

enum Status {
    LOADING = 'loading',
    SUCCESS = "success",
    ERROR = 'error',
}

interface PizzaSliceState {
    items: PizzaT[]
    status: Status
}

export type SearchPizzaParams = {
    order:string
    sortBy: string
    category: string
    search:string
    currentPage: string
}


export const fetchPizzas = createAsyncThunk<PizzaT[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
        const {order, sortBy, category, search, currentPage} = params
        const {data} = await axios.get<PizzaT[]>(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
            category}${search}&sortBy=${sortBy}&order=${order}`)

        return data
    }
)


const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<PizzaT[]>) => {
            state.items = action.payload
        },

    },
    extraReducers: (builder) => {

        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        })

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})

export const selectPizza = (state: RootState) => state.pizza
export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer