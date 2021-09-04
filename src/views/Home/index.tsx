import React from 'react';
// Apollo Client
import { useQuery } from '@apollo/client'
import { GET_USER } from '../../graphql/requests'
import { Container, Title } from './styles';
import { Header } from './Header';
import { FeedContent } from './FeedContent';

export function Home(){
  const { data, loading, error } = useQuery(GET_USER)
  return(
    <Container>
      {console.log(data)}
      {console.log(error)}
      <Header />
      <FeedContent />
    </Container>
  );
};