import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter.js'
import Address from './Address';
import MyStateData from './MyStateData.js';
import MyTest from './MyTest.js';
import MyAPI from './MyAPI';
import Tours from './Tours';
import String from './String';
import Pagination from './Pagination';
import FormData from './FormData';
import FullFormFunction from './FullFormFunction';
import FullForm from './FullForm';
import EmployeeInfo from './EmployeeInfo';
import Test from './Test';
import FormikYupForm from './FormikYupForm';
import Dynamic from './Dynamic';
import DynamicForm from './DynamicForm';
import Ecommerce from './Ecommerce';
import UseReducerEx from './UseReducerEx';
import store from './store/store';
import { Provider } from 'react-redux';
import AddToCart from './AddToCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <AddToCart />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
