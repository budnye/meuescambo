import React from 'react';
import { Scroll } from '../../views/Default/Login/styles';
import { Container, Title, Box } from './styles';

interface Props {
  title: string;
  options: Option[];
  visible: boolean;
}

interface Option {
  id: string;
  name: string;
}

export function SelectModal({visible, options} : Props) {


  return (
        <Container 
          visible={true}         
          animationType="slide"
          transparent={true}>
          <Box>
            <Title>Selecione uma opção</Title>
            <Scroll>
              {options && options.length > 0 && options.map(option => (
                <Title key={option.id}>{option.name}</Title>
              ))}
            </Scroll>
          </Box>
        </Container>
  );
};