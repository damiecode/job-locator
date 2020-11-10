const initialState = {
  pending: false,
  people: [],
  error: '',
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_PEOPLE_SUCCESS':
      return {
        ...state,
        pending: false,
        people: action.people,
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

export default peopleReducer;
