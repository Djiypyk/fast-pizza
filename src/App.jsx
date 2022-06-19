import React from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Components/pages/Cart/Cart";
import {FullPizzas} from "./Components/pages/FullPizzas";

export const PATH = {
    home: '/fast-pizza',
    cart: '/cart',
    pizza: '/pizza/:id'
}

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={PATH.home} element={<Home/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={PATH.cart} element={<Cart/>}/>
                    <Route path={PATH.pizza} element={<FullPizzas/>}/>
                </Routes>
            </div>
        </div>
    )
        ;
}

export default App;
