import React from 'react';
import { Container } from './styles';
import { Header } from './Header';
import { Swipe } from '../../../components/Swipe';
import { StatusBar } from 'expo-status-bar';
export function Home() {

  return (
    <Container>
      <StatusBar style="dark" />
      <Header />
      {/* <FeedContent /> */}
      <Swipe />
    </Container>
  );
}
