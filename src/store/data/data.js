import {ActionType} from '../action';
import reviews from '../../mocks/reviews';

const initialState = {
  offers: [],
  isDataLoaded: false,
  review: reviews,
  comments: [],
  isCommentsLoaded: false,
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
  }
  return state;
};

export {data};
