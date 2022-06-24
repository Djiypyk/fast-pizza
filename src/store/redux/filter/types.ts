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
