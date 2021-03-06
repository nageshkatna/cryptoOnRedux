import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';
import promiseMiddleware from "redux-promise";
import 'semantic-ui-css/semantic.min.css';

const middleware= applyMiddleware(promiseMiddleware)(createStore)

// const store = createStore(middleware,reducers);

ReactDOM.render(<Provider store={middleware(reducers)}>
<App /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
