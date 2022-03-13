import {combineReducers} from '@reduxjs/toolkit';

import tab from './tab/reducer';
import date from './Date/reducer';

export default combineReducers({
  tab,
  date,
});
