import {createAsyncThunk} from "@reduxjs/toolkit";
import {PizzaT, SearchPizzaParams} from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<PizzaT[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
        const {order, sortBy, category, search, currentPage} = params
        const {data} = await axios.get<PizzaT[]>(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
            category}${search}&sortBy=${sortBy}&order=${order}`)

        return data
    }
)
