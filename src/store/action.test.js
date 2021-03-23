import {
  citySelection,
  loadOffers,
  requireAuthorization,
  loadComments,
  sortOffers,
  selectedOffer,
  loadFavorite,
  ActionType,
} from './action';

const offers = [
  {
    city: `Paris`,
    id: 1
  },
  {
    city: `Cologne`,
    id: 2
  }
];

const comments = [
  {
    name: `Bill`,
    text: `WHAT`
  },
  {
    name: `Tod`,
    text: `WHY`
  }
];

describe(`Action creators work correctly`, () => {
  it(`Выбор города Париж`, () => {
    const expectedAction = {
      type: ActionType.INCREMENT_CITY,
      payload: `Paris`
    };
    expect(citySelection(`Paris`)).toEqual(expectedAction);
  });

  it(`Загрузка предложений`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    };
    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it(`Авторизация`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    };
    expect(requireAuthorization(`AUTH`)).toEqual(expectedAction);
  });

  it(`Загрузка комментариев`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it(`Сортировка предложений`, () => {
    const expectedAction = {
      type: ActionType.SORT_OFFERS,
      payload: `Popular`
    };
    expect(sortOffers(`Popular`)).toEqual(expectedAction);
  });

  it(`Выделенное предложение`, () => {
    const expectedAction = {
      type: ActionType.SELECTED_OFFER,
      payload: 1
    };
    expect(selectedOffer(1)).toEqual(expectedAction);
  });

  it(`Загрузка избранных предложений`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: offers
    };
    expect(loadFavorite(offers)).toEqual(expectedAction);
  });
});
