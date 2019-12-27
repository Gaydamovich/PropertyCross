import {
  ADD_PROPERTY_TO_FAVOURITES,
  REMOVE_PROPERTY_TO_FAVOURITES,
} from '../actions/actionsTypes/actionsTypes';
import { FAVOURITES } from '../constants/constants';

const initialState = {
  favorites: JSON.parse(localStorage.getItem(FAVOURITES)) || [],
};

export const favouritesPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPERTY_TO_FAVOURITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case REMOVE_PROPERTY_TO_FAVOURITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
