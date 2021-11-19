import React from 'react';
import { Container } from './styles';
import { Header } from './Header';
import { Swipe } from '../../../components/Swipe';
import { StatusBar } from 'expo-status-bar';
import { SwipeDeck } from '../../../components/SwipeDeck';
import { useQuery } from '@apollo/client';
import { GET_USER_PRODUCTS } from '../../../graphql/requests';
import { ScreenLoader } from '../../../components/ScreenLoader';
import { Welcome } from '../../../components/Welcome';
export function Home({ navigation }) {
  const { data, loading } = useQuery(GET_USER_PRODUCTS);

  if (loading) return <ScreenLoader />;

  return (
    <Container>
      <StatusBar style="dark" />
      <Header />
      {!loading && data?.userProducts.length > 0 ? (
        <SwipeDeck navigation={navigation} />
      ) : (
        <Welcome navigation={navigation} />
      )}
    </Container>
  );
}
