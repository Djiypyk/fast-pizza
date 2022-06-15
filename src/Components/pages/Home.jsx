import React, {useEffect, useState} from 'react';
import {Categories} from "../Categories";
import {Sort} from "../Sort";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";
import {Paginator} from "../../common/component/Pagination/Paginator";

export const Home = ({searchValue}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortType, setSortType] = useState({name: 'Популярности', sortProperty: 'rating'})
    const [categoryId, setCategoryId] = useState(0)
    const onChangeCategory = (number) => {
        setCategoryId(number)
    }
    const onClickSelectedType = (typeId) => {
        setSortType(typeId)
    }

    useEffect(() => {
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const sortBy = sortType.sortProperty.replace('-', '')
        const sortCategory = categoryId > 0 ? `category=${categoryId}` : ''
        const sortByValue = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items?${
            sortCategory}${sortByValue}&sortBy=${sortBy}&order=${order}`)
            .then((res) => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType.sortProperty, searchValue])

    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory}/>
                <Sort sortValue={sortType} onClickSelectedType={onClickSelectedType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map(obj => <PizzaBlock
                        key={obj.id} {...obj}/>)}
            </div>
            <Paginator/>
        </div>
    );
};

