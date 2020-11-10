const initialState = {
  pending: false,
  jobs: [],
  error: '',
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_MEALS_SUCCESS':
      return {
        ...state,
        pending: false,
        meals: action.jobs,
      };
    case 'FETCH_REQUEST_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default jobsReducer;
