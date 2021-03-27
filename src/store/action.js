export const ActionType = {
  INCREMENT_CITY: `main/city`,
  LOAD_OFFERS: `main/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `property-screen/loadComments`,
  SORT_OFFERS: `main/sortOffers`,
  SELECTED_OFFER: `main/cart-component`,
  LOAD_FAVORITES: `favorites-screen`,
  LOAD_USER_INFO: `main`,
  LOAD_COMING_OFFERS: `property-screen`,
};

export const citySelection = (city) => ({
  type: ActionType.INCREMENT_CITY,
  payload: city
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const sortOffers = (sort) => ({
  type: ActionType.SORT_OFFERS,
  payload: sort
});

export const selectedOffer = (idOffer) => ({
  type: ActionType.SELECTED_OFFER,
  payload: idOffer
});

export const loadFavorite = (offers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: offers
});

export const userInfo = (user) => ({
  type: ActionType.LOAD_USER_INFO,
  payload: user
});

export const loadComingOffers = (offers) => ({
  type: ActionType.LOAD_COMING_OFFERS,
  payload: offers
});
