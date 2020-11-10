import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchRequestFailure, fetchPeopleSuccess,
} from '../actions/index';

const getPeople = username => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://torre.bio/api/bios/${username}`)
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
