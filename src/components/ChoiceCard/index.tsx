import React from 'react';

import { Container, Title } from './styles';

export interface CardProps {
  type: 'like' | 'dislike';
  opacity?: number;
}

export function ChoiceCard({ type, opacity }: CardProps) {
  return(
    <Container type={type} style={[{transform: [{ rotate: type === 'like' ? '-30deg' : '30deg'}]}, {opacity}]}>
      <Title type={type}>{type === 'like' ? 'Troco já' : 'Cai fora'}</Title>
    </Container>
  );
};