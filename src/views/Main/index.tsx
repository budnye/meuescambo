import React from 'react';
import { Button } from '../../components/Button';
import { Hello } from './Hello';
import { Footer } from './Footer';

import { 
  Container, 
  TopBox, 
} from './styles';

export function Main(){
  return(
    <Container>
      <TopBox />
      <Hello />
      <Footer />
    </Container>
  );
};