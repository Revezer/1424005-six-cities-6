import {NameSpace} from '../reducer';
import {createSelector} from "reselect";
import {getCity} from '../increment-city/selectors';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getReview = (state) => state[NameSpace.DATA].review;

export const getCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => (
        offer.city.name === city
      ));
    }
);
