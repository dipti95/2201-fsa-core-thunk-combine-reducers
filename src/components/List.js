import React from 'react';
import ListCard from './ListCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  border: 1px solid black;
  border-radius: 5px;
  width: 326px;
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
