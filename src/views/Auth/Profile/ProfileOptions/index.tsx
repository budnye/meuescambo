import React from 'react';
import { Alert } from 'react-native';
import { Button } from '../../../../components/Button';
import { clearData } from '../../../../services/auth';
import { ApolloConsumer } from '@apollo/client';
import { Container, Title } from './styles';

export function ProfileOptions({ navigation, client }: any) {
  const logOut = () => {
    Alert.alert('Atenção', 'Você gostaria mesmo de sair do aplicativo?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => reset(),
      },
    ]);
  };
  const reset = async () => {
    await client.resetStore();
    await clearData();
  };
  return (
    <Container>
      <Button
        title={'Dados Pessoais'}
        style={{ marginBottom: 32 }}
        onPress={() => navigation.navigate('ProfilePersonal')}
      />
      <Button
        title={'Endereço'}
        style={{ marginBottom: 32 }}
        onPress={() => navigation.navigate('ProfileLocation')}
      />
      <Button
        title={'Senha'}
        style={{ marginBottom: 32 }}
        onPress={() => navigation.navigate('ProfilePassword')}
      />
      <Button
        title={'Sair'}
        style={{ marginBottom: 32 }}
        onPress={() => logOut()}
      />
    </Container>
  );
}
