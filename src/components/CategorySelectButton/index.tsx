import React from 'react';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface Props {
  title: string;
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