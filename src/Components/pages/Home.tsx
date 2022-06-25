import React, {FC, useCallback, useEffect} from 'react';

import {useSelector} from "react-redux";

import {SortPopup} from "../SortPopup";
import {Categories} from "../Categories";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";
import {Paginator} from "../../common/component/Pagination/Paginator";
import {useAppDispatch} from "../../store/redux/store";
import {selectFilter} from "../../store/redux/filter/selectors";
import {selectPizza} from "../../store/redux/pizza/selectors";
import {setCategoryId, setCurrentPage} from "../../store/redux/filter/slice";
import {fetchPizzas} from "../../store/redux/pizza/asyncActions";
import {PizzaT, Status} from "../../store/redux/pizza/types";

export const Home: FC = () => {
    // const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const isSearch = useRef(false)
    // const isMounted = useRef(false)

    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter)
    const {items, status} = useSelector(selectPizza)
    console.log(status)
    const sortType = sort.sortProperty

    const onChangeCurrentPage = (numberPage: number): void => {
        dispatch(setCurrentPage(numberPage))
    }
    const onChangeCategory = useCallback((id: number): void => {
            dispatch(setCategoryId(id))
        }
        , [dispatch])

    const getPizzas = async () => {
        const order = sortType.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.replace('-', '')
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchPizzas({order, sortBy, category, search, currentPage: String(currentPage)}))
    }

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({sortType, categoryId, currentPage})
    //         navigate(`?${queryString}`)
    //     }
    //     isMounted.current = true
    // }, [navigate, categoryId, sortType, searchValue, currentPage])
    //
    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams
    //         const sortObj = list.find(obj => obj.sortProperty === params.sortBy)
    //
    //         dispatch(setFilters({
    //             searchValue: params.search,
    //             categoryId: Number(params.category),
    //             currentPage: Number(params.currentPage),
    //             sort: sortObj || list[0],
    //         }))
    //         isSearch.current = true
    //     }
    // }, [dispatch])
    //
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     if (!isSearch.current) {
    //         getPizzas()
    //     }
    //     isSearch.current = false
    // }, [categoryId, sortType, searchValue, currentPage])

    useEffect(() => {
        getPizzas()

    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <SortPopup sort={sort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {items.length < 1 && status === Status.SUCCESS ? (
                <div className={'content__error-info'}>
                    <h2>Произошла ошибка</h2>
                    <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже или проверьте параметр
                        запроса.</p>
                </div>
            ) : (
                <div className="content__items">
                {status === 'loading'
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map((obj: PizzaT) => {
                        return (
                            <PizzaBlock key={obj.id}
                                        {...obj}/>
                        )
                    })}
            </div>
            )}

            <Paginator currentPage={currentPage} onChangeCurrentPage={onChangeCurrentPage}/>
        </div>
    );
};

