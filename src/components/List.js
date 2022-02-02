import React from 'react';
import ListCard from './ListCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: min-content;
  width: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default function List({ list }) {
  return (
    <ListContainer>
      {list.map((card) => (
        <ListCard key={card.id} card={card} />
      ))}
    </ListContainer>
  );
}
