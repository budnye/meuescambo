import React from 'react';
import { Hello } from './Hello';
import { Footer } from './Footer';
import { Logo } from './Logo';

import { Container } from './styles';

export function Main({ navigation }) {
  return (
    <Container>
      <Logo />
      <Hello />
      <Footer navigation={navigation} />
    </Container>
  );
}
