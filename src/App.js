import React from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Categories} from "./Components/Categories";
import {Sort} from "./Components/Sort";
import {Pizza} from "./Components/Pizza";


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
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                        <Pizza name={'Чизбургер-пицца'} price={395}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
