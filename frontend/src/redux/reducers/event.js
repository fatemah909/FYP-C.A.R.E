import {
  DELETE_EVENT,
  ADD_EVENT,
  GET_EVENTS,
  LOGOUT,
  SELECT_EVENT,
  UPDATE_EVENT,
} from '../types';

const initialState = {
  list: [],
  selected: undefined,
};

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EVENTS:
    case SELECT_EVENT:
      return {
        ...state,
        ...payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        list: state.list.map((val) =>
          val.id === payload.id ? { ...payload, id: payload.id } : val
        ),
      };
    case DELETE_EVENT:
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

export default eventReducer;
