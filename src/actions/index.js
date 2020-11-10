const fetchRequestPending = () => ({
  type: 'FETCH_REQUEST_PENDING',
});

const fetchRequestSuccess = response => ({
  type: 'FETCH_REQUEST_SUCCESS',
  response,
});

const fetchJobsSuccess = meals => ({
  type: 'FETCH_JOBS_SUCCESS',
  meals,
});

const fetchRequestFailure = error => ({
  type: 'FETCH_REQUEST_FAILURE',
  error,
});

const fetchJobMeal = details => ({
  type: 'FETCH_JOB_SUCCESS',
  details,
});

export const resetSelected = () => ({ type: 'RESET' });

export {
  fetchRequestPending,
  fetchRequestSuccess,
  fetchRequestFailure,
  fetchJobsSuccess,
  fetchJobMeal,
};
