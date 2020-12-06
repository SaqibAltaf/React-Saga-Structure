import { combineReducers } from 'redux';
import colorTheme from './colorTheme';
import User from './User';




const reducers = combineReducers({
  colorTheme,
  User
});

export default reducers;