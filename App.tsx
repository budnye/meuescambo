import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

// Apollo
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import cache from './src/graphql/cache';

// Theme
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';



// import { NavigationBar } from './src/views/NavigationBar';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import { Router } from './src/Router';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'sda'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    Lobster_400Regular,
  });

  const [singedIn, setSingedIn] = useState(false);



  
  if(!fontsLoaded){
    return <AppLoading />
  }
  return  (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </ThemeProvider>
  )
  
}

