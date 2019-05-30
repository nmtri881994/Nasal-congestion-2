import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux';

//store
import store from './store';

//components
import App from "./App";

const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();