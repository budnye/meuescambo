import React, { useState } from 'react';

import { Container, Title } from './styles';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
import { MainCard } from '../MainCard';
export function Swipe({   }: any){
  
  const [index, setindex] = useState(0)
  const items = [
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
  return(
    <Container>
      {items && items.map((item: any, idx: number) => 
      idx === index  &&
      (
        <Swipeable
        key={idx}
        friction={2}
        leftThreshold={30}
        rightThreshold={30}
        renderLeftActions={() => <MainCard title={items[index + 1].name} image={items[index + 1].image_url} />}
        renderRightActions={() => <MainCard title={items[index + 1].name} image={items[index + 1].image_url} />}
        onSwipeableLeftOpen={() => setindex(index + 1)}
        onSwipeableRightOpen={() => setindex(index + 1)}
      >
        <MainCard title={items[index].name} image={items[index].image_url} />
      </Swipeable>  
      ))}
    </Container>
  );
};