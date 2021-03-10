import {NameSpace} from '../reducer';
import {createSelector} from "reselect";
import {getCity} from '../increment-city/selectors';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getCommentLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;

export const getOfferId = (state) => state[NameSpace.DATA].offerId;

export const getCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => (
        offer.city.name === city
      ));
    }
);

export const getOffer = createSelector(
    [getOffers, getOfferId],
    (offers, id) => {
      return offers.find((item) => +item.id === +id);
    }
);
