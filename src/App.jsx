import React, {useState} from 'react'
import './scss/app.scss';
import {Header} from "./Components/Header";
import {Home} from "./Components/pages/Home";
import {NotFound} from "./Components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./Components/pages/Cart";

export const PATH = {
    home: 'fast-pizza',
    cart: 'cart'
}
export const SearchContext = React.createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={PATH.home} element={<Home/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                        <Route path={PATH.cart} element={<Cart/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>

        </div>
    )
        ;
}

export default App;
