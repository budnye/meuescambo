import React from 'react';

import { Container, Title } from './styles';
import { StatusBar } from 'expo-status-bar';

export function Trade(){
  return(
    <Container>
      <StatusBar style="dark" />
      <Title>Trade</Title>
    </Container>
  );
};