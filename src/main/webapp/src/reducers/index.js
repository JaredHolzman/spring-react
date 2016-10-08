import { combineReducers } from 'redux';
import simple from './simple';
import locale from './locale';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  /* simple, */
  /* locale, */
  routing
});
