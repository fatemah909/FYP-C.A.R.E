import { LOGOUT, GET_FEEDBACKS, DELETE_FEEDBACK } from '../types';

const initialState = {
  list: [],
};

const feedbackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEEDBACKS:
      return {
        ...state,
        ...payload,
      };
    case DELETE_FEEDBACK:
      return {
        ...state,
        list: state.list.filter((val) => val.id !== payload),
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default feedbackReducer;
