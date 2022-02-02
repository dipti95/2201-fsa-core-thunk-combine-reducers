import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './components/List';
import axios from 'axios';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { list },
      } = await axios.get('http://localhost:5500/api');

      this.setState({ list });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <AppContainer>
        <List list={this.state.list} />
      </AppContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
