import React, {useEffect, useState} from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaBlock} from "./Components/PizzaBlock.jsx";
import PizzaSkeleton from "./common/component/PizzaSkeleton";

function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items')
            .then((res) => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })

    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
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
            </div>
        </div>
    )
        ;
}

export default App;
