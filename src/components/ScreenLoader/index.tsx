import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import theme from '../../global/styles/theme';

import { Container,  } from './styles';

export function ScreenLoader(){
  return(
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
};