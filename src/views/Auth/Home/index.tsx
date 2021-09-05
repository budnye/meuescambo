import React from 'react';
// Apollo Client
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../graphql/requests';
import { Container, Title } from './styles';
import { Header } from './Header';
import { FeedContent } from './FeedContent';
import { Swipe } from '../../../components/Swipe';
import { StatusBar } from 'expo-status-bar';
export function Home() {
  const { data, loading, error } = useQuery(GET_USER);
  const data2 = [
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
    <Container>
      <StatusBar style="dark" />
      <Header />
      {/* <FeedContent /> */}
      <Swipe />
    </Container>
  );
}
