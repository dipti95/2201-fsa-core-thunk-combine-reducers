import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  grid: [],
  selectedColor: 'red',
};

// ACTION TYPES
const ADD_ROW = 'ADD_ROW';
const SELECT_COLOR = 'SELECT_COLOR';
const DRAW = 'DRAW';

// ACTION CREATORS
export const addRow = () => ({
  type: ADD_ROW,
});
export const selectColor = (selectedColor) => ({
  type: SELECT_COLOR,
  payload: selectedColor,
});
// position is an array [ rowIdx, cellIdx ]
export const draw = (position) => ({
  type: DRAW,
  payload: position,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      return { ...state, grid: [...state.grid, Array(20).fill('')] };
    case SELECT_COLOR:
      return { ...state, selectedColor: action.payload };
    case DRAW: {
      const newGrid = state.grid.map((row, rowIdx) => {
        if (rowIdx !== action.payload[0]) {
          return row;
        }

        return row.map((cell, cellIdx) => {
          const [selectedRowIdx, selectedCellIdx] = action.payload;

          const isMatch =
            rowIdx === selectedRowIdx && cellIdx === selectedCellIdx;

          const currentCellColor = state.grid[rowIdx][cellIdx];

          if (isMatch && currentCellColor === state.selectedColor) {
            return '';
          }

          if (isMatch) {
            return state.selectedColor;
          }

          return cell;
        });
      });

      return { ...state, grid: newGrid };
    }

    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(loggerMiddleware));
