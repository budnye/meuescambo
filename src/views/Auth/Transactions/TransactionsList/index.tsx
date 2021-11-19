import React from 'react';
import { TransactionItem } from '../TransactionItem';

import { Container, Title } from './styles';

export function TransactionsList({ transactions, navigation }) {
  return (
    <Container
      data={transactions}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <TransactionItem transaction={item} navigation={navigation} />
      )}
    ></Container>
  );
}
