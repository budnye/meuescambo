import React from 'react';
import { Container } from './styles';
import { Header } from './Header';
import { Swipe } from '../../../components/Swipe';
import { StatusBar } from 'expo-status-bar';
import { SwipeDeck } from '../../../components/SwipeDeck';
export function Home() {

  return (
    <Container>
      <StatusBar style="dark" />
      <Header />

      <SwipeDeck />
    </Container>
  );
}
