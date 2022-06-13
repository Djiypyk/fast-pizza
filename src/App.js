import React from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {PizzaBlock} from "./Components/PizzaBlock.jsx";
import pizzas from './common/pizza.json'


function App() {
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
                        {pizzas.map((obj, i) => <PizzaBlock key={i} {...obj}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
