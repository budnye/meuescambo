import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  textColor?: string;
  secondary?: boolean;
  icon?: string;
  iconColor?: string;
}

export function Button({title, color, textColor, secondary, icon, iconColor, onPress }: Props) {
  return(
    <Container color={color} onPress={onPress} secondary={secondary}>
      {icon && <Icon name={icon} color={iconColor|| '#fff'}/>}<Title  textColor={textColor} secondary={secondary} >{title}</Title>
    </Container>
  );
};