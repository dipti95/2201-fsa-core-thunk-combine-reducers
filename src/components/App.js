import React from 'react';
import { connect } from 'react-redux';
import { addRow, selectColor, draw } from '../store';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'black',
  'white',
  'brown',
];

const App = ({ addRow, selectColor, draw, grid }) => (
  <>
    <h1>Pixelate</h1>
    <div>
      <button id="add-row" onClick={() => addRow()}>
        Add a row
      </button>
      <select
        onChange={(e) => {
          selectColor(e.target.value);
        }}
      >
        {colors.map((color, idx) => (
          <option key={idx} value={color}>
            {color[0].toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
    </div>
    <table>
      <tbody>
        {grid.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((color, cellIdx) => (
              <td
                key={cellIdx}
                className={color}
                onMouseOver={(e) => {
                  if (e.buttons === 1) draw([rowIdx, cellIdx]);
                }}
                onClick={() => draw([rowIdx, cellIdx])}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
  };
};

// object version of mapDispatch
const mapDispatchToProps = {
  addRow,
  selectColor, // (...args) => selectColor(...args) }
  draw,
};

// function dispatch wrapping explicitly version
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRow: () => dispatch(addRow()),
//     selectColor: (color) => dispatch(selectColor(color)),
//     draw: () => dispatch(draw()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
