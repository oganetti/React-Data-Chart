import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import {combineReducers,createStore} from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import productReducer from './Reducers/product-reducer';
import userReducer from './Reducers/user-reducer';
import 'semantic-ui-css/semantic.min.css';




const allReducer = combineReducers({
    products: productReducer,
    user: userReducer
})


const store = createStore(allReducer,{
    products:[{name:'İphone'}],
    user:'Michael'
});



serviceWorker.unregister();

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

