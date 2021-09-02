import React from 'react';

import { Container, Icon } from './styles';
export interface ButtonProps {
  name: string;
  color?: string;
  size?: number;
  type?: 'small' | 'large';
}
export function CardButton({ name, color, size, type }: ButtonProps){
  return(
    <Container type={type}>
      <Icon name={name} size={size} color={color} />
    </Container>
  );
};