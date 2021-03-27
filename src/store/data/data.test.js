import {data} from './data';
import {ActionType} from '../action';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {addReview, commentsLoad, favoriteLoad, fetchOffers} from '../api-action';

const state = {
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

const api = createAPI(() => {});
describe(`Работа Редуктора data`, () => {

  it(`Редуктор без дополнительных параметров должен возвращать исходное состояние`, () => {
    expect(data(undefined, {}))
      .toEqual(state);
  });
  it(`Загрузка предложений`, () => {
    const offers = {
      type: ActionType.LOAD_OFFERS,
      payload: [{
        id: 1,
        city: `Paris`
      },
      {
        id: 2,
        city: `Paris`
      }]
    };

    expect(data(state, offers))
      .toEqual({
        offers: [{id: 1, city: `Paris`}, {id: 2, city: `Paris`}],
        isDataLoaded: true,
        comments: [],
        isCommentsLoaded: false,
        sortType: `Popular`,
        selectedOffer: `false`,
        favorites: [],
        isFavoritesLoaded: false,
        comingOffers: [],
        isCommingOffersLoaded: false,
        user: {},
      });
  });
  it(`Загрузка комментариев`, () => {
    const comments = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{
        id: 1,
        city: `Paris`
      },
      {
        id: 2,
        city: `Paris`
      }]
    };

    expect(data(state, comments))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        comments: [{id: 1, city: `Paris`}, {id: 2, city: `Paris`}],
        isCommentsLoaded: true,
        sortType: `Popular`,
        selectedOffer: `false`,
        favorites: [],
        isFavoritesLoaded: false,
        comingOffers: [],
        isCommingOffersLoaded: false,
        user: {},
      });
  });
  it(`Тип сортировки`, () => {
    const sortType = {
      type: ActionType.SORT_OFFERS,
      payload: `topRated`
    };

    expect(data(state, sortType))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        comments: [],
        isCommentsLoaded: false,
        sortType: `topRated`,
        selectedOffer: `false`,
        favorites: [],
        isFavoritesLoaded: false,
        comingOffers: [],
        isCommingOffersLoaded: false,
        user: {},
      });
  });
  it(`id предложения`, () => {
    const offerId = {
      type: ActionType.SELECTED_OFFER,
      payload: 1,
    };

    expect(data(state, offerId))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        comments: [],
        isCommentsLoaded: false,
        sortType: `Popular`,
        selectedOffer: 1,
        favorites: [],
        isFavoritesLoaded: false,
        comingOffers: [],
        isCommingOffersLoaded: false,
        user: {},
      });
  });
  it(`Загрузка избранных предложений`, () => {
    const favorites = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{
        id: 5,
        city: `Paris`
      },
      {
        id: 2,
        city: `Paris`
      }]
    };

    expect(data(state, favorites))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        comments: [],
        isCommentsLoaded: false,
        sortType: `Popular`,
        selectedOffer: `false`,
        favorites: [{id: 5, city: `Paris`}, {id: 2, city: `Paris`}],
        isFavoritesLoaded: true,
        comingOffers: [],
        isCommingOffersLoaded: false,
        user: {},
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersLoaded = fetchOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{id: 2}]);

    return fetchOffersLoaded(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{id: 2}],
        });
      });
  });
  it(`Should make a correct API call to get /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fetchOffersLoaded = commentsLoad(fakeId);

    apiMock
      .onGet(`/comments/${fakeId}`)
      .reply(200, [{id: 2}]);

    return fetchOffersLoaded(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{id: 2}],
        });
      });
  });
  it(`Should make a correct API call to post /comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {id: 1, comment: `hi`, rating: 5};
    const fetchOffersLoaded = addReview(fakeComment);

    apiMock
      .onPost(`/comments/${fakeComment.id}`)
      .reply(200, [{id: 2}]);

    return fetchOffersLoaded(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{id: 2}],
        });
      });
  });
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersLoaded = favoriteLoad();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{id: 3}]);

    return fetchOffersLoaded(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{id: 3}],
        });
      });
  });
});
