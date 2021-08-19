import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';

// Screens
import { Main } from './src/views/Main'

import { Login } from './src/views/Login'

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'




export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return  (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
  
}

