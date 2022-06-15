import React, {useEffect, useState} from 'react';
import {Categories} from "../Categories";
import {Sort} from "../Sort";
import PizzaSkeleton from "../../common/component/PizzaSkeleton";
import {PizzaBlock} from "../PizzaBlock";

export const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items')
            .then((res) => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index}/>)
                    : items.map(obj => <PizzaBlock
                        key={obj.id} {...obj}/>)}
            </div>
        </div>
    );
};

