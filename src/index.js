import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './components/List';
import axios from 'axios';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const {
          data: { list },
        } = await axios.get('http://localhost:5500/api');
        setList(list);
      } catch (err) {
        console.error(err);
      }
    };
    getList();
  }, []);

  return (
    <AppContainer>
      <List list={list} />
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
