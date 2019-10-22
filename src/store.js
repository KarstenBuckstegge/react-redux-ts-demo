import { createStore } from 'redux';
import { listReducer } from './reducer';

const ReduxcourseList = require('./data/ReduxcourseList.json'); 

export default (initialState=ReduxcourseList) => {
 return createStore(
    listReducer,
   initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
}