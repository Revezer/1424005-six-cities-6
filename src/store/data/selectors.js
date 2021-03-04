import {NameSpace} from '../reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getReview = (state) => state[NameSpace.DATA].review;
