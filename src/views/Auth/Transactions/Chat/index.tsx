import React from 'react';
import { ChatInput } from './ChatInput';
import { RenderMessage } from './RenderMessage';

import { Container, Title, MessageList } from './styles';

export function Chat({ navigation, route }) {
  const { id } = route.params;
  const data = [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      message: 'Hello',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      message: 'Hello',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 3,
      senderId: 1,
      receiverId: 2,
      message: 'Gostaria de troca uns items contigo.',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 4,
      senderId: 1,
      receiverId: 2,
      message: 'Ta afim?',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 5,
      senderId: 2,
      receiverId: 1,
      message: 'Beleza cara, deixa eu ver o que tu tem.',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 6,
      senderId: 2,
      receiverId: 1,
      message: 'Me da uns minutos',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 7,
      senderId: 2,
      receiverId: 1,
      message: 'Já volto',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 8,
      senderId: 1,
      receiverId: 2,
      message: 'Beleza, fico no aguardo!',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 9,
      senderId: 2,
      receiverId: 1,
      message: 'Olha essa tua geladeira ta legal.',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 10,
      senderId: 2,
      receiverId: 1,
      message: 'Topa ficar com meu som e mais alguma coisa?',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 11,
      senderId: 1,
      receiverId: 2,
      message: 'Uhm... deixa eu pensar.',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 12,
      senderId: 1,
      receiverId: 2,
      message: 'Acho que não ta valendo.',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
  ];
  return (
    <Container>
      <MessageList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        // ListHeaderComponent={() => <Searchbar />}
        renderItem={({ item }) => <RenderMessage message={item} />}
      />
      <ChatInput />
    </Container>
  );
}
