import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './components/List';

const list = [{ id: 1, name: 'chore', content: 'take out trash' }];

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <List list={list} />
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
