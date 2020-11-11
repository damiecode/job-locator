import axios from 'axios';
import moment from 'moment';
import { setErrors } from './error';

const BASE_API_URL = 'http://localhost:3000';

export const getJobs = data => {
  return async (dispatch) => {
    try {
      let { description, page } = data;
      description = description ? encodeURIComponent(description) : '';

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
      }

      const jobs = await axios.get(
        `${BASE_API_URL}/jobs?description=${description}${page}`
      );
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );
      return dispatch(setJobs(sortedJobs));
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  jobs
});

export const setLoadMoreJobs = (jobs) => ({
  type: 'LOAD_MORE_JOBS',
  jobs
});

