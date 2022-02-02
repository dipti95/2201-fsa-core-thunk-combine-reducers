import React from 'react';
import styled from 'styled-components';

const ListCardContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px;
    padding: 10px;
    height: min-content;
    min-height: 100px;
    width: 150px;
    border: 1px solid black;
    border-radius: 3px;
  }
  & .name {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  & .content {
    padding: 4px 0;
  }
  & .task-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default class ListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  render() {
    const { card } = this.props;

    return (
      <ListCardContainer>
        <div className={'name'}>{card.name}</div>
        <div className={'content'}>{card.content}</div>
        <div className={'task-status'}>
          <span>{this.state.isChecked ? 'Done' : 'Not Done'}</span>
          <input
            type="checkbox"
            onClick={(e) => this.setState({ isChecked: e.target.checked })}
          />
        </div>
      </ListCardContainer>
    );
  }
}
