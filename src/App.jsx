import React from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Components/pages/Cart";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">

                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'cart'} element={<Cart/>}/>
                </Routes>

            </div>
        </div>
    )
        ;
}

export default App;
