import React from 'react';
import { Button } from '../../../../components/Button';

import { Container, Title } from './styles';

export function ProfileOptions({ navigation }: any) {
  return(
    <Container>
      <Button
        title={'Dados Pessoais'}
        style={{ marginBottom: 32 }}
        // onPress={() => navigation.navigate('products')}
      />
      <Button
        title={'Endereço'}
        style={{ marginBottom: 32 }}
        // onPress={() => navigation.navigate('products')}
      />
      <Button
        title={'Senha'}
        style={{ marginBottom: 32 }}
        // onPress={() => navigation.navigate('products')}
      />
    </Container>
  );
};