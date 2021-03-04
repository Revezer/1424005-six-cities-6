import {NameSpace} from '../reducer';

export const getCity = (state) => state[NameSpace.CITY].city;
export const getCities = (state) => state[NameSpace.CITY].cities;
