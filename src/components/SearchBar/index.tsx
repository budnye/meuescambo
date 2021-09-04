import React from 'react';

import { Container } from './styles';
import { Input } from '../Input';
import theme from '../../global/styles/theme';

export function Searchbar() {
  return (
    <Container>
      <Input
        icon="search"
        iconColor={theme.colors.secondary}
        placeholder="Pesquise aqui"
      />
    </Container>
  );
}