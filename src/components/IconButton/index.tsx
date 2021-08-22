import React from 'react';

import { Container, Icon } from './styles';

export function IconButton({...props}){
  return(
    <Container>
      <Icon {...props} />
    </Container>
  );
};