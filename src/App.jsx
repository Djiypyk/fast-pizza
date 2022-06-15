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
                <div className="container">
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                        <Route path={'сфке'} element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
