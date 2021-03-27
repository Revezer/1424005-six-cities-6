import {loadOffers, requireAuthorization, loadComments, loadFavorite, userInfo, loadComingOffers} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(userInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const commentsLoad = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const addReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadComments(data)))
);

export const favoriteLoad = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavorite(data)))
);

export const fetchComingOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then(({data}) => dispatch(loadComingOffers(data)))
);

export const changeStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
);
