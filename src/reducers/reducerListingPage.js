import {
  GET_PROPERTIES,
  RESET_PROPERTIES,
} from '../actions/actionsTypes/actionsTypes';

const initialState = {
  placeName: '',
  longTitle: '',
  list: [],
  page: 0,
  totalResults: 0,
  error: null,
};

const listingPage = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_PROPERTIES}_REQUEST_SUCCESS`:
      return {
        ...state,
        placeName: action.placeName,
        longTitle: action.payload.location.longTitle,
        page: action.page,
        totalResults: action.payload.totalResults,
        error: null,
        list: [
          ...state.list,
          ...action.payload.properties,
        ],
      };
    case `${GET_PROPERTIES}_REQUEST_FAILED`:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_PROPERTIES:
      return {
        ...state,
        list: [],
        page: 0,
        totalResults: 0,
        error: null,
      };
    default:
      return state;
  }
};

export default listingPage;
