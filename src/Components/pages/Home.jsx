import React, {useEffect, useRef} from 'react';
import {Categories} from "../Categories";
import {list, Sort} from "../Sort";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";
import {Paginator} from "../../common/component/Pagination/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCategoryId, setCurrentPage, setFilters} from "../../store/redux/slices/filterSlice";
import {fetchPizzas, selectPizza} from "../../store/redux/slices/pizzaSlice";
import qs from "qs";
import {Link, useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter)
    const {items, status} = useSelector(selectPizza)
    const sortType = sort.sortProperty

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
    }, [dispatch()])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false
    }, [categoryId, sortType, searchValue, currentPage])

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
                    : items.map(obj => {
                        return (
                            <Link key={obj.id} to={`/pizza/${obj.id}`}>
                                <PizzaBlock
                                    {...obj}/>
                            </Link>
                        )
                    })}
            </div>
            <Paginator currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
        </div>
    );
};

