import React, {useContext, useEffect, useState} from 'react';
import {Categories} from "../Categories";
import {Sort} from "../Sort";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";
import {Paginator} from "../../common/component/Pagination/Paginator";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../store/redux/slices/filterSlice";

export const Home = () => {
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector((state) => state.filter)
    const sortType = sort.sortProperty

    const {searchValue} = useContext(SearchContext)

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)


    const onChangeCurrentPage = (numberPage) => {
        setCurrentPage(numberPage + 1)
    }
    const onChangeCategory = (id) => {
        console.log(id)
        dispatch(setCategoryId(id))
    }


    useEffect(() => {
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.replace('-', '')
        const sortCategory = categoryId > 0 ? `category=${categoryId}` : ''
        const sortByValue = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
            sortCategory}${sortByValue}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map(obj => <PizzaBlock
                        key={obj.id} {...obj}/>)}
            </div>
            <Paginator onChangeCurrentPage={onChangeCurrentPage}/>
        </div>
    );
};

