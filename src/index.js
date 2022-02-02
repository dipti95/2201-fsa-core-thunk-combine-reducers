import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './components/List';

const list = [
  { id: 1, name: 'chore', content: 'take out trash' },
  { id: 2, name: 'chore', content: 'wash dishes' },
  { id: 3, name: 'chore', content: 'make bed' },
  { id: 4, name: 'study', content: 'redux thunk' },
  { id: 5, name: 'study', content: 'combineReducer fn' },
  { id: 6, name: 'chore', content: 'walk dog' },
  { id: 7, name: 'fun', content: 'margaritas' },
  { id: 8, name: 'fun', content: 'lan party' },
];

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <List list={list} />
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
