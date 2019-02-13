import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {BrowserRouter,Route} from 'react-router-dom';

import "./assets/css/base.css";
import "./assets/css/style.css";


ReactDOM.render(
    <BrowserRouter>
        <Route component={App}></Route>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

