import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { mediaDisplayReducer } from './mediaDisplayReducer';

export default combineReducers({
    routing: routerReducer,
    mediaDisplay: mediaDisplayReducer
});