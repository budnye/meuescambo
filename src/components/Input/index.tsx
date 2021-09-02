import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Box, Icon } from './styles';
interface InputProps extends TextInputProps {
  icon?: string;
  iconColor?: string;
}

export function Input({icon, iconColor,...rest} : InputProps){
  return (
    <Box>
      {icon && <Icon name={icon} color={iconColor}/>}
      <Container {...rest} />
    </Box>
  );
};