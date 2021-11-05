import React from 'react';

import { FabButton } from './styles';

export function AddFab({ navigation }: any) {
  return (
    <FabButton
      icon="plus"
      onPress={() => navigation.navigate('RegisterProducts')}
    />
  );
}
