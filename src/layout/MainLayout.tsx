import React, {FC} from 'react';
import {Header} from "../Components/Header";
import {Outlet} from "react-router-dom";

export const MainLayout: FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

