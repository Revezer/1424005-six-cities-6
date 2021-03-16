import {NameSpace} from '../reducer';
import {createSelector} from "reselect";
import {getCity} from '../increment-city/selectors';

function sortRating(offerA, offerB) {
  return (offerB.rating - offerA.rating);
}

function sortPriseLowToHigh(offerA, offerB) {
  return (offerB.price - offerA.price);
}

function sortPriseHighToLow(offerA, offerB) {
  return (offerA.price - offerB.price);
}

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getCommentLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getSortType = (state) => state[NameSpace.DATA].sortType;
export const getSelectedOffer = (state) => state[NameSpace.DATA].selectedOffer;
export const getFavoritesLoaded = (state) => state[NameSpace.DATA].isFavoritesLoaded;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getCityOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => {
      return offers.filter((offer) => (
        offer.city.name === city
      ));
    }
);

export const getOffer = (id) => createSelector(
    getOffers,
    (offers) => {
      return offers.find((item) => +item.id === +id);
    }
);

export const getOffersSort = createSelector(
    [getCityOffers, getSortType],
    (offers, sort) => {
      switch (sort) {
        case `Popular`:
          return offers;
        case `lowToHigh`:
          return offers.slice().sort(sortPriseHighToLow);
        case `highToLow`:
          return offers.slice().sort(sortPriseLowToHigh);
        case `topRated`:
          return offers.slice().sort(sortRating);
      }
      return offers;
    }
);
