import React from 'react';
import { Button } from '../Button';

import { 
  Container, 
  Greeting, 
  InfoText, 
  TopBox, 
  TitleBox,
  Footer,
  FooterInfo, 
} from './styles';

export function Hello(){
  return(
    <Container>
      <TopBox />
      <TitleBox>
          <Greeting>Seja bem-vindo!</Greeting>
          <InfoText>Registre seus produtos e serviços e encontre pessoas para fazer o seu escambo :)</InfoText>
        </TitleBox>
        <Footer>
          <Button title="Quero me cadastrar" primary onPress={() => console.log('Register')} />
          <Button title="Já sou cadastrado" primary={false} onPress={() => console.log('Login')}/>
          <FooterInfo>Entenda como funciona</FooterInfo>
        </Footer>
    </Container>
  );
};