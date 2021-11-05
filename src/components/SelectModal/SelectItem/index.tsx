import React from 'react';
import { Container, Title } from './styles';
import { Option } from '../../../views/Auth/Trade/RegisterProducts/ProductForm/index'

interface SelectItemProps {
  option: Option;
  onPress: any;
  selected: boolean;
}
export function SelectItem({selected, option, onPress}: SelectItemProps) {
  return(
    <Container onPress={() => onPress(option)}>
      <Title selected={selected} >{option.name}</Title>
    </Container>
  );
};