import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async ({
                                                                                 order,
                                                                                 sortBy,
                                                                                 sortCategory,
                                                                                 sortByValue,
                                                                                 currentPage
                                                                             }) => {
        const {data} = await axios.get(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
            sortCategory}${sortByValue}&sortBy=${sortBy}&order=${order}`)
        return data
    }
)

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            debugger
            state.items = action.payload
        },

    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer