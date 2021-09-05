import React from 'react';

import { Container, Title } from './styles';
import { StatusBar } from 'expo-status-bar';

export function Search(){
  return(
    <Container>
      <StatusBar style="dark" />
      <Title>Search</Title>
    </Container>
  );
};