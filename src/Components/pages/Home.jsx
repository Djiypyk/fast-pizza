import React, {useContext, useEffect, useRef} from 'react';
import {Categories} from "../Categories";
import {list, Sort} from "../Sort";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";
import {Paginator} from "../../common/component/Pagination/Paginator";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage, setFilters} from "../../store/redux/slices/filterSlice";
import {fetchPizzas} from "../../store/redux/slices/pizzaSlice";
import qs from "qs";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const {categoryId, sort, currentPage} = useSelector((state) => state.filter)
    const {items, status} = useSelector((state) => state.pizza)
    const sortType = sort.sortProperty

    const {searchValue} = useContext(SearchContext)

    const onChangeCurrentPage = numberPage => {
        dispatch(setCurrentPage(numberPage))
    }
    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const getPizzas = async () => {
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.replace('-', '')
        const sortCategory = categoryId > 0 ? `category=${categoryId}` : ''
        const sortByValue = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchPizzas({order, sortBy, sortCategory, sortByValue, currentPage}))
    }

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({sortType, categoryId, currentPage})
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [navigate, categoryId, sortType, searchValue, currentPage])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find(obj => obj.sortProperty === params.sortType)
            dispatch(setFilters({params, sort}))
            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false
    }, [categoryId, sortType, searchValue, currentPage])


    // useEffect(() => {
    //     const order = sortType.includes('-') ? 'asc' : 'desc'
    //     const sortBy = sortType.replace('-', '')
    //     const sortCategory = categoryId > 0 ? `category=${categoryId}` : ''
    //     const sortByValue = searchValue ? `&search=${searchValue}` : ''
    //
    //     axios.get(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?page=${currentPage}&limit=4&${
    //         sortCategory}${sortByValue}&sortBy=${sortBy}&order=${order}`)
    //         .then((res) => {
    //                 setIsLoading(false)
    //                 dispatch(setItems(res.data))
    //             }
    //         )
    //     window.scrollTo(0, 0)
    // }, [categoryId, sortType, searchValue, currentPage])


    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status === 'loading'
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map(obj => <PizzaBlock
                        key={obj.id} {...obj}/>)}
            </div>
            <Paginator currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
        </div>
    );
};
