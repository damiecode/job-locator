import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchJobsSuccess, fetchRequestFailure,
} from '../actions/index';

const fetchJobs = type => dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchJobsSuccess(response.data.jobs));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default fetchJobs;
