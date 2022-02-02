import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const GET_LIST = 'GET_LIST';

export const getList = (list) => ({
  type: GET_LIST,
  payload: list,
});

const initState = {
  list: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return { ...state, list: payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
