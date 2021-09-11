import { useQuery } from '@apollo/client';
import React, { useRef } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GET_FEED } from '../../graphql/requests';
import { ButtonsFooter } from '../ButtonsFooter';
import { MainCard } from '../MainCard';

import { Container, Title } from './styles';

export function SwipeDeck(){
  const { data, loading } = useQuery(GET_FEED);
  const width = Dimensions.get('window').width;
  const cardWidth = width * 0.9;
  // const cardHeight = RFPercentage(70);
  const swipe = useRef(new Animated.ValueXY()).current;

  const titlSign = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: ( _, {dx, dy, y0, x0 } ) => {
      swipe.setValue({ x: dx, y: dy });
      console.log(x0 > cardWidth / 2 ? 1 : -1)
      titlSign.setValue(x0 > cardWidth / 2 ? 1 : -1);
    },
    onPanResponderRelease: ( _, gesture ) => {
      Animated.spring(swipe, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
        friction: 5,
      }).start();
    }
  });

  
  return(
    <Container>
      
    {!loading && data && data.products
      .map((product: any, index: number) => {
        const isFirst = index === 0;
        const dragHandlers = isFirst ? panResponder.panHandlers : {};

        return (
          <MainCard 
            key={index} 
            title={product.name} 
            image={product.image_url} 
            isFirst={isFirst}
            swipe={swipe}
            titlSign={titlSign} 
            {...dragHandlers}
          />
        );
      })
      .reverse()
    }

      <ButtonsFooter 
          likeAction={() => console.log("LikeAction")}
          dislikeAction={() => console.log("DislikeAction")}
          favoriteAction={() => console.log("FavoriteAction")}
        
        />
    </Container>
  );
};