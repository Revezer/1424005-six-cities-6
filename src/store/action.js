export const ActionType = {
  INCREMENT_CITY: `main/city`,
  LOAD_OFFERS: `main/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `property-screen/loadComments`,
  SORT_OFFERS: `main/sortOffers`,
  SELECTED_OFFER: `main/cart-component`,
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
