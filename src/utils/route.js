import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

//import Home from '../page/home';
//import List from '../page/list';
import Checkout from '../page/checkout';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Checkout} path="/" />
        </BrowserRouter>
    );
};

export default Routes;