import { LOGOUT, GET_PROBLEMS, DELETE_PROBLEM } from '../types';

const initialState = {
  list: [],
};

const problemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROBLEMS:
      return {
        ...state,
        ...payload,
      };
    case DELETE_PROBLEM:
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

export default problemReducer;
