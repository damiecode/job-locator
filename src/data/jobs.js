import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchJobsSuccess, fetchRequestFailure,
} from '../actions/index';

const fetchJobs = type => dispatch => {
  dispatch(fetchRequestPending());
  axios.get(` https://torre.co/api/opportunities/${type}`)
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
