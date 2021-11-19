import React from 'react';
import { Message } from '../../TransactionItem/styles';

import { MessageView, Logo, Card, Text, AvatarBox, Box } from './styles';

export function RenderMessage({ message }) {
  const logo1 = require('../../../../../assets/avatar/Cat_2.png');
  const logo2 = require('../../../../../assets/avatar/Dog_3.png');
  const user = {
    id: 1,
  };
  return (
    <MessageView sender={user.id === message.senderId}>
      <AvatarBox>
        <Logo source={user.id === message.senderId ? logo2 : logo1} />
      </AvatarBox>
      <Card sender={user.id === message.senderId}>
        <Text>{message.message}</Text>
      </Card>
    </MessageView>
  );
}
