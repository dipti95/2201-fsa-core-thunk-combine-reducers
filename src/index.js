import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import List from './components/List';
import { Provider, connect } from 'react-redux';
import store, { fetchGetList } from './redux/store';

import { list } from '../data';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <AppContainer>
        <List list={list} />
      </AppContainer>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getList: () => {
      dispatch(fetchGetList());
    },
  };
};

const ConnectedApp = connect(mapState, mapDispatch)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
