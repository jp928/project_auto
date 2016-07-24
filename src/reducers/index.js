import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import sitesReducer from './sites';
// import * as sites from './search';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  sites: sitesReducer,
  // sites
});

export default rootReducer;
