import React from 'react';
import { FooterBox, FooterInfo } from './styles';

import { Button } from '../../../../components/Button';

export function Footer({ navigation }: any) {
  return (
    <FooterBox>
      <Button
        title="Quero me cadastrar"
        onPress={() => console.log('Register')}
      />
      <Button
        title="Já sou cadastrado"
        secondary
        onPress={() => navigation.navigate('Login')}
      />
      <FooterInfo>Entenda como funciona</FooterInfo>
    </FooterBox>
  );
}
