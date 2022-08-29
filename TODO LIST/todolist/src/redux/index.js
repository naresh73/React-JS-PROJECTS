import { combineReducer } from 'redux';
import countOfReducer from './reducer';

const rootReducer = combineReducer({
    count : countOfReducer
});

export default rootReducer;