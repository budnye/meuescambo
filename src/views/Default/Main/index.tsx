import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Hello } from './Hello';
import { Footer } from './Footer';
import { Logo } from './Logo';

import { Container } from './styles';

export function Main({ navigation }) {
  return (
    <Container>
      <StatusBar style="light" />
      <Logo />
      <Hello />
      <Footer navigation={navigation} />
    </Container>
  );
}
