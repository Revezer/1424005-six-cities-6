import {combineReducers} from 'redux';
import {city} from './increment-city/increment-city';
import {data} from './data/data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  CITY: `CITY`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CITY]: city,
  [NameSpace.USER]: user,
});
