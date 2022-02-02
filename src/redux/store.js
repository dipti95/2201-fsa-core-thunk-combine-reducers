import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import axios from 'axios';

const GET_LIST = 'GET_LIST';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

const getList = (list) => ({
  type: GET_LIST,
  payload: list,
});

const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const fetchGetList = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(true));

    try {
      const {
        data: { list },
      } = await axios.get('http://localhost:5500/api');
      dispatch(getList(list));
    } catch (err) {
      dispatch(
        setError({
          type: 'ApiRequestError',
          message: '',
        })
      );
      console.error(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

const initState = {
  list: [],
  loading: false,
  error: {},
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return { ...state, list: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
