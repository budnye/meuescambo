import React from 'react';
import { Button } from '../../../../../components/Button';
import { Input } from '../../../../../components/Input';
import theme from '../../../../../global/styles/theme';

import { Container, Title } from './styles';

export function ChatInput() {
  return (
    <Container>
      <Input
        icon="send"
        endIcon
        iconColor={theme.colors.primary}
        placeholder="Digite aqui sua menssagem"
      />
    </Container>
  );
}
