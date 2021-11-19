import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  InputBox,
  Icon,
  Error,
  Box,
  ErrorBox,
  IconButton,
} from './styles';
interface InputProps extends TextInputProps {
  icon?: string;
  iconColor?: string;
  rest?: any;
  error?: string;
}

export function Input({
  icon,
  endIcon,
  iconColor,
  error,
  iconAction,
  ...rest
}: InputProps) {
  return (
    <Box>
      <InputBox>
        {icon && !endIcon && (
          <IconButton onPress={() => iconAction()}>
            <Icon name={icon} color={iconColor} />
          </IconButton>
        )}
        <Container {...rest} />
        {icon && endIcon && (
          <IconButton onPress={() => iconAction()}>
            <Icon name={icon} color={iconColor} />
          </IconButton>
        )}
      </InputBox>
      <ErrorBox>{error && <Error>{error}</Error>}</ErrorBox>
    </Box>
  );
}
