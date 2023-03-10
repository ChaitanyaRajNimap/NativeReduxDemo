import {combineReducers} from 'redux';
import countReducer from './CountReducer';

const rootReducer = combineReducers({
  countReducer: countReducer,
});

export default rootReducer;
