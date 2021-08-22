import React from 'react';

import { ListContainer, Title } from './styles';
import { MainCard } from '../../../components/MainCard';


export function FeedContent(){
  const data = [
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
      image_url: 'https://www.pontorh.com.br/y/2725/carpinteiro-e1464631823154-720.jpg',
    },
  ]
  return(
    <ListContainer
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MainCard title={item.name} image={item.image_url}/>} 
    />
  );
};