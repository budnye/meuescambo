import React from 'react';
import { Scroll } from '../../views/Default/Login/styles';
import { SelectItem } from './SelectItem';
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

export function SelectModal({visible, options, title} : Props) {


  return (
        <Container 
          visible={false}         
          animationType="slide"
          transparent={true}>
          <Box>
            <Title>{title}</Title>
            <Scroll>
              {options && options.length > 0 && options.map(option => (
                <SelectItem key={option.id} option={option.name}/>
              ))}
            </Scroll>
          </Box>
        </Container>
  );
};