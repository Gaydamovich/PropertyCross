import {
  ADD_PROPERTY_TO_FAVOURITES,
  REMOVE_PROPERTY_TO_FAVOURITES,
} from './actionsTypes/actionsTypes';
import { FAVOURITES } from '../constants/constants';

export const addPropertyToFavourites = (property) => {
  const favourites = JSON.parse(localStorage.getItem(FAVOURITES)) || [];
  const findId = favourites.find((el) => el.id === property.id);
  if (!findId) favourites.push(property);
  localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
  return {
    type: ADD_PROPERTY_TO_FAVOURITES,
    payload: favourites,
  };
};

export const removePropertyToFavourites = (property) => {
  const favourites = JSON.parse(localStorage.getItem(FAVOURITES)) || [];
  const newFavourites = favourites.filter((el) => el.id !== property.id);
  localStorage.setItem(FAVOURITES, JSON.stringify(newFavourites));
  return {
    type: REMOVE_PROPERTY_TO_FAVOURITES,
    payload: newFavourites,
  };
};
