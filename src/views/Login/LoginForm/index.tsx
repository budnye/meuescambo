import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../../components/Button';

import { Input } from '../../../components/Input';
import { Container, Title, Label, InputBox, Footer } from './styles';


export function LoginForm(){
  return(
    <Container>
      <Title>Entrar com seu e-mail</Title>
      <InputBox>
        <Label>E-mail</Label>
        <Input />
      </InputBox>
      <InputBox>
        <Label>Senha</Label>
        <Input />
      </InputBox>
      <Footer>
        <Button title="Entrar"/>
      </Footer>
      
    </Container>
    
  );
};