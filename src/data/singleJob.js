import axios from 'axios';
import {
  fetchRequestPending, fetchRequestFailure, fetchSingleJob,
} from '../actions/index';

const fetchJob = id => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://torre.co/api/opportunities/${id}`)
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
