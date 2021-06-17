import { combineReducers } from 'redux';

import { todoReducer as todo } from '../bus/todos/reducer';

export const rootReducer = combineReducers({
  todo,
});
