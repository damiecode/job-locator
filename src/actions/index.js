const fetchRequestPending = () => ({
  type: 'FETCH_REQUEST_PENDING',
});

const fetchRequestSuccess = response => ({
  type: 'FETCH_REQUEST_SUCCESS',
  response,
});

const fetchJobsSuccess = jobs => ({
  type: 'FETCH_JOBS_SUCCESS',
  jobs,
});

const fetchPeopleSuccess = people => ({
  type: 'FETCH_PEOPLE_SUCCESS',
  people,
});

const fetchRequestFailure = error => ({
  type: 'FETCH_REQUEST_FAILURE',
  error,
});

const fetchSingleJob = details => ({
  type: 'FETCH_JOB_SUCCESS',
  details,
});

export const resetSelected = () => ({ type: 'RESET' });

export {
  fetchRequestPending,
  fetchRequestSuccess,
  fetchRequestFailure,
  fetchJobsSuccess,
  fetchSingleJob,
  fetchPeopleSuccess,
};
