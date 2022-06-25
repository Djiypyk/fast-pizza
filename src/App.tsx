import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom";

import './scss/app.scss';

import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {MainLayout} from "./layout/MainLayout";

const Cart = React.lazy(() => import(/*webpackChunkName: 'Cart'*/ './Components/pages/Cart/Cart'));
const FullPizzas = React.lazy(() => import(/*webpackChunkName: 'FullPizzas'*/ './Components/pages/Cart/FullPizzas/FullPizzas'));

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={PATH.home} element={<Home/>}/>
                <Route path={'*'} element={<NotFound/>}/>
                <Route path={PATH.cart} element={
                    <Suspense>
                        <Cart/>
                    </Suspense>}/>
                <Route path={PATH.pizza} element={<Suspense>
                    <FullPizzas/>
                </Suspense>}/>
            </Route>
        </Routes>
    )
}

export default App;

export const PATH = {
    home: '/fast-pizza',
    cart: '/cart',
    pizza: '/pizza/:id'
}