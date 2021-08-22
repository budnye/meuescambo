import React from 'react';

import { ListContainer, Title } from './styles';

export function FeedContent(){
  const data = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Smith',
    },
    {
      id: 4,
      name: 'Jane Smith',
    },
  ]
  return(
    <ListContainer
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Title>{item.name}</Title>} 
    />
  );
};