import React from 'react';

import { ListContainer, Title } from './styles';
import { MainCard } from '../../../../components/MainCard';
import { Searchbar } from '../../../../components/SearchBar';
import { Swipe } from '../../../../components/Swipe';

export function FeedContent() {
  const data = [
    {
      id: 0,
      name: 'Serviço de Carpintaria',
      image_url:
        'https://www.pontorh.com.br/y/2725/carpinteiro-e1464631823154-720.jpg',
    },
    {
      id: 1,
      name: 'Trailer para casal',
      image_url: 'https://img.olx.com.br/images/30/306041802862002.jpg',
    },
    {
      id: 2,
      name: 'Cama Solteiro',
      image_url: 'https://img.olx.com.br/images/61/615168314735970.jpg',
    },
    {
      id: 3,
      name: 'Relógio Diesel Top',
      image_url: 'https://img.olx.com.br/images/17/177183662438250.jpg',
    },
    {
      id: 4,
      name: 'Serviço de Carpintaria por hora',
      image_url:
        'https://www.pontorh.com.br/y/2725/carpinteiro-e1464631823154-720.jpg',
    },
    {
      id: 5,
      name: 'Serviço de Carpintaria por hora',
      image_url: 'https://img.olx.com.br/images/17/177183662438250.jpg',
    },
    {
      id: 6,
      name: 'Diarista sem grilo!',
      image_url:
        'https://s2.glbimg.com/CrTrmLu7obeP3NoLgPatN4U2fMk=/620x480/e.glbimg.com/og/ed/f/original/2018/05/21/faxina.jpg',
    },
  ];
  return (
    <ListContainer
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => <Searchbar />}
      renderItem={({ item }) => (
        <MainCard title={item.name} image={item.image_url} />
      )}
    />
  );
}
