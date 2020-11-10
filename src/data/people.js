import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchRequestFailure, fetchPeopleSuccess,
} from '../actions/index';

const getPeople = () => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchPeopleSuccess(response.data.people));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default getPeople;
