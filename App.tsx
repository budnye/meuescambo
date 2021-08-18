import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';


import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'


import theme from './src/global/styles/theme';
import {Main} from './src/views/Main'
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
      <Main />
    </ThemeProvider>
  )
  
}

