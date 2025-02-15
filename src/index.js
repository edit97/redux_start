import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './redux/reducers/reducer';
import App from "./App";
import * as serviceWorker from './serviceWorker';

// export const store =createStore(Reducer);

let store;


store = createStore(Reducer,
    compose(applyMiddleware(thunk))
);

export {store};

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
