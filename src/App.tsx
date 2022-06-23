import React from 'react'
import './scss/app.scss';
import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Components/pages/Cart/Cart";
import {MainLayout} from "./layout/MainLayout";
import {FullPizzas} from "./Components/pages/FullPizzas";

export const PATH = {
    home: '/fast-pizza',
    cart: '/cart',
    pizza: '/pizza/:id'
}

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={PATH.home} element={<Home/>}/>
                <Route path={'*'} element={<NotFound/>}/>
                <Route path={PATH.cart} element={<Cart/>}/>
                <Route path={PATH.pizza} element={<FullPizzas/>}/>
            </Route>
        </Routes>

    )
        ;
}

export default App;