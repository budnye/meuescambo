import React from 'react';

import { Container, Title } from './styles';
import { Header } from './Header';
import { FeedContent } from './FeedContent';

export function Home(){
  return(
    <Container>
      <Header />
      <FeedContent />
    </Container>
  );
};