import { combineReducers } from 'redux';
import matters from './matters';

const appReducers = combineReducers({
    matters,
});

export default appReducers;
