import axios from 'axios';

export const getCountries = (region) => async (dispatch) => {
  try {
    dispatch({ type: 'LOADING', payload: true });

    //logic
    if (region === 'Filter by region' || region === 'All' || region === 'ALL') {
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);

      dispatch({ type: 'LOADING', payload: false });

      dispatch({ type: 'GET_COUNTRIES', payload: data });
    } else {
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );

      dispatch({ type: 'LOADING', payload: false });

      dispatch({ type: 'GET_COUNTRIES', payload: data });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getFilter = (filter) => (dispatch) => {
  try {
    dispatch({ type: 'FILTER', payload: filter });
  } catch (error) {
    console.log(error);
  }
};

export const searchCountries = (input) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${input}`
    );

    dispatch({ type: 'GET_COUNTRIES', payload: data });
  } catch (err) {
    dispatch({ type: 'ERROR', payload: err });
  }
};
