import React from 'react';

import { Container, Title } from './styles';
import { Input } from '../Input'
import { Texto } from '../Texto';
import theme from '../../global/styles/theme'

export function Searchbar(){
  return(
    <Container>
      <Input 
        icon="search" 
        iconColor={theme.colors.secondary}
        placeholder="Pesquise aqui"
        />
        <Texto />
    </Container>
  );
};