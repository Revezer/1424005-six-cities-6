import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  sortType: `Popular`,
  selectedOffer: `falce`,
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
  }
  return state;
};

export {data};
