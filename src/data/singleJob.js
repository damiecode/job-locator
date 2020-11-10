import axios from 'axios';
import {
  fetchRequestPending, fetchRequestFailure, fetchSingleJob,
} from '../actions/index';

const fetchJob = id => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      dispatch(fetchSingleJob(response.data.jobs[0]));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default fetchJob;
