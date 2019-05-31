//brings together all the other reducers, eg itemreducer, authreducer, errorreducer, todoreducer(to add todos)
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});
