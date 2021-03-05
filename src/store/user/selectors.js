import {NameSpace} from '../reducer';

export const getAuthorization = (state) => state[NameSpace.USER].authorizationStatus;
