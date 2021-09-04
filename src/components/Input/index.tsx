import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputBox, Icon, Error, Box, ErrorBox } from './styles';
interface InputProps extends TextInputProps {
  icon?: string;
  iconColor?: string;
  rest?: any;
  error?: string;
}

export function Input({ icon, iconColor, error, ...rest }: InputProps) {
  return (
    <Box>
      <InputBox>
        {icon && <Icon name={icon} color={iconColor} />}
        <Container {...rest} />
      </InputBox>
      <ErrorBox>{error && <Error>{error}</Error>}</ErrorBox>
    </Box>
  );
}
