import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { connectionReducer } from './connectionReducer';
import { frameReducer } from './frameReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  connectionState: connectionReducer,
  frameState: frameReducer

});

export default rootReducer;