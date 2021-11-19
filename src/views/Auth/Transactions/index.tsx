import React from 'react';
import { LottieMessage } from '../../../components/LottieMessage';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { ChatInput } from './Chat/ChatInput';

import { Container, Title } from './styles';
import { TransactionsList } from './TransactionsList';

export function Transactions({ navigation }) {
  // 10 transactions

  const transactions = [
    {
      id: 1,
      proposals: [
        {
          id: 1,
          user_id: 1,
          product: {
            id: 1,
            name: 'Chinelo Havaiana',
            description: 'Com a bandeira do brasil',
          },
        },
        {
          id: 2,
          user_id: 2,
          product: {
            id: 2,
            name: 'Casaco de couro',
            description: 'Top preto e quentinho',
          },
        },
      ],
    },
    {
      id: 2,
      proposals: [
        {
          id: 3,
          user_id: 3,
          product: {
            id: 3,
            name: 'Bolsa térmica',
            description: 'Mantém tudo gelado',
          },
        },
        {
          id: 4,
          user_id: 4,
          product: {
            id: 4,
            name: 'Pandeiro samba',
            description: 'Toca um samba',
          },
        },
      ],
    },
    {
      id: 3,
      proposals: [
        {
          id: 5,
          user_id: 5,
          product: {
            id: 5,
            name: 'Product 5',
            description: 'Description 5',
          },
        },
        {
          id: 6,

          user_id: 6,
          product: {
            id: 6,
            name: 'Product 6',
            description: 'Description 6',
          },
        },
      ],
    },
    {
      id: 4,
      proposals: [
        {
          id: 7,
          user_id: 7,
          product: {
            id: 7,
            name: 'Product 7',
            description: 'Description 7',
          },
        },
        {
          id: 8,
          user_id: 8,
          product: {
            id: 8,
            name: 'Product 8',
            description: 'Description 8',
          },
        },
      ],
    },
  ];
  if (false) return <ScreenLoader />;

  return (
    <Container>
      {transactions.length < 0 ? (
        <TransactionsList transactions={transactions} navigation={navigation} />
      ) : (
        <LottieMessage
          navigation={navigation}
          title="Nenhuma transação encontrada"
          message="Você ainda não realizou nenhuma transação, vá até a página inicial e procure algum escambo que você gosta."
          lottie={require('../../../assets/lottie/notFound.json')}
          path="home"
          button="Voltar para a página inicial"
        />
      )}
    </Container>
  );
}
