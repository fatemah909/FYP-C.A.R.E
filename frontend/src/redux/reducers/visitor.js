import { LOGOUT, GET_VISITORS, DELETE_VISITOR } from '../types';

const initialState = {
  list: [],
};

const visitorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VISITORS:
      return {
        ...state,
        ...payload,
      };
    case DELETE_VISITOR:
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

export default visitorReducer;
