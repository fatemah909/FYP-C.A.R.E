import {
  DELETE_STUDENT,
  GET_STUDENTS,
  LOGOUT,
  SELECT_STUDENT,
  UPDATE_STUDENT,
} from '../types';

const initialState = {
  list: [],
  selected: undefined,
};

const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDENTS:
    case SELECT_STUDENT:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        list: state.list.map((val) =>
          val.id === payload.id ? { ...payload, id: payload.id } : val
        ),
      };
    case DELETE_STUDENT:
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

export default studentReducer;
