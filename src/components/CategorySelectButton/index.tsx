import React from 'react';
import { Option } from '../../views/Auth/Trade/RegisterProducts/ProductForm';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface Props {
  title: string | undefined;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress, ...rest } : Props){
  return(
    <Container {...rest} onPress={onPress}>
      <Category>{title}</Category>
      <Icon />
    </Container>
  );
};