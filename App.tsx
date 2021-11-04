import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

// Apollo
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import cache from './src/graphql/cache';

// Theme
import { ThemeProvider } from 'styled-components/native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

import theme from './src/global/styles/theme';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { NavigationBar } from './src/views/NavigationBar';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Router } from './src/router';

const httpLink = createHttpLink({
  uri: 'http://192.168.5.141:3000/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token');
  // console.log('token ', token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    Lobster_400Regular,
  });

  const [singedIn, setSingedIn] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Portal>
          <ApolloProvider client={client}>
            <Router />
          </ApolloProvider>
        </Portal>
      </Provider>
    </ThemeProvider>
  );
}
