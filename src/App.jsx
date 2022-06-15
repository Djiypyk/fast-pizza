import React, {useState} from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Components/pages/Cart";

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">

                <Routes>
                    <Route path={'/'} element={<Home searchValue={searchValue}/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                    <Route path={'cart'} element={<Cart/>}/>
                </Routes>

            </div>
        </div>
    )
        ;
}

export default App;
