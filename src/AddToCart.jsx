import React from 'react'
import Header from './container/Header';
import FetchProduct from './container/FetchProduct';
import DisplayProduct from './container/DisplayProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AddToCart() {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <FetchProduct/>
                <Routes>
                    <Route path='/product' exact component={DisplayProduct} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
