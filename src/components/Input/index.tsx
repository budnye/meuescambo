import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Box } from './styles';

type Props = TextInputProps;

export function Input({...rest} : Props){
  return (
    <Box>
      <Container {...rest} />
    </Box>
  );
};