import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  offerId: `0`
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
    case ActionType.OFFER_ID:
      return {
        ...state,
        offerId: action.payload,
      };
  }
  return state;
};

export {data};
