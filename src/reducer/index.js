import { combineReducers } from 'redux';

const AppReducer = (
  state = {
    countries: [],
    loading: false,
    filter: 'Filter by region',
    error: '',
  },
  action
) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({
  Reducer: AppReducer,
});
