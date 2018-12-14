import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Store';
import 'semantic-ui-css/semantic.min.css';



serviceWorker.unregister();

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

