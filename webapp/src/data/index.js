import { combineReducers } from 'redux-immutable';

import routerReducer from './router';

import login from './login/reducer';
import feelings from './feelings/reducer';
import users from './users/reducer';
import posts from './posts/reducer';
import expanded from './expanded/reducer';
import feedback from './feedback/reducer';

export const rootReducer = combineReducers({
  login,
  feelings,
  users,
  posts,
  expanded,
  feedback,
  router: routerReducer,
});
