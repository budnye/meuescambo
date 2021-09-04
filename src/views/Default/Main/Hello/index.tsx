import React from 'react';

import { Greeting, InfoText, TitleBox } from './styles';

export function Hello() {
  return (
    <TitleBox>
      <Greeting>Seja bem-vindo!</Greeting>
      <InfoText>
        Registre seus produtos e serviços e encontre pessoas para fazer o seu
        escambo :)
      </InfoText>
    </TitleBox>
  );
}
