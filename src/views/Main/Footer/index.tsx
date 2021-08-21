import React from 'react';

import { FooterBox, FooterInfo, } from './styles';

import { Button } from '../../../components/Button';

export function Footer(){
  return(
    <FooterBox>
      <Button title="Quero me cadastrar" onPress={() => console.log('Register')} />
       <Button title="Já sou cadastrado" secondary onPress={() => console.log('Login')}/>
    <FooterInfo>Entenda como funciona</FooterInfo>
  </FooterBox>
  );
};