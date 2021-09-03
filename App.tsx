import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import cache from './src/graphql/cache';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Theme
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

// Screens
import { Main } from './src/views/Main';
import { Login } from './src/views/Login';
import { Home } from './src/views/Home';

// import { NavigationBar } from './src/views/NavigationBar';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
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

  const Stack = createStackNavigator();

  if(!fontsLoaded){
    return <AppLoading />
  }
  return  (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <>
            {!singedIn ? (
              <>
              <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              </>
            ) : (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            )}
          </>
        </Stack.Navigator>
      </NavigationContainer>
      </ApolloProvider>
      {/* <NavigationBar /> */}
    </ThemeProvider>
  )
  
}

