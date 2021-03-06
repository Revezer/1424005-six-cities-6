import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  sortType: `Popular`,
  selectedOffer: `false`,
  favorites: [],
  isFavoritesLoaded: false,
  user: {},
  comingOffers: [],
  isCommingOffersLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortType: action.payload
      };
    case ActionType.SELECTED_OFFER:
      return {
        ...state,
        selectedOffer: action.payload
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true,
      };
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload
      };
    case ActionType.LOAD_COMING_OFFERS:
      return {
        ...state,
        comingOffers: action.payload,
        isCommingOffersLoaded: true,
      };
  }
  return state;
};

export {data};
