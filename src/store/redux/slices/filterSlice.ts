import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";

export enum SortPropertyE {
    RATING_PLUS = 'rating',
    RATING_MINUS = '-rating',
    PRICE_MINUS = '-price',
    PRICE_PLUS = 'price',
    TITLE_MINUS = '-title',
    TITLE_PLUS = 'title',
}

export type SortT = {
    name: string
    sortProperty: SortPropertyE
}

export interface FilterSliceState {
    searchValue: string
    categoryId: number
    currentPage: number
    sort: SortT
}

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {name: 'Популярности', sortProperty: SortPropertyE.RATING_PLUS},
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<SortT>) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
            state.currentPage = Number(action.payload.currentPage)
            state.sort = action.payload.sort
            state.categoryId = Number(action.payload.categoryId)
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload

        }
    },
})
export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort
export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer










