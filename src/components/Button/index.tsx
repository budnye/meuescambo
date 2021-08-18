import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  primary: boolean;
}

export function Button({title, primary, onPress }: Props) {
  return(
    <Container primary={primary} onPress={onPress}>
      <Title  primary={primary}>{title}</Title>
    </Container>
  );
};