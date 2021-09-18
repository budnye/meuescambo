import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Animated, Dimensions, PanResponder } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { DISLIKE_ACTION, GET_FEED, GET_USER_PRODUCTS, LIKE_ACTION } from '../../graphql/requests';
import { ButtonsFooter } from '../ButtonsFooter';
import { MainCard } from '../MainCard';
import { ScreenLoader } from '../ScreenLoader';

import { Container, Title } from './styles';

export function SwipeDeck({ navigation }){
  const { data, loading } = useQuery(GET_FEED);
  const [likeAction, ] = useMutation(LIKE_ACTION);
  const [dislikeAction, ] = useMutation(DISLIKE_ACTION);
  const [list, setList] = useState([]);
  const [firstTime, setFirstTime] = useState(true);


  const width = Dimensions.get('window').width; 
  const cardWidth = width * 0.9;
  // const cardHeight = RFPercentage(70);
  const swipe = useRef(new Animated.ValueXY()).current;

  const titlSign = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    if(data) {
      setList(data.products);
      setFirstTime(false);
    } 
  }, [data])


  async function handleLike(id: string){
    try {
      setList((prevState) => prevState.slice(1));
      await likeAction({ variables:  { id } });
       
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDislike(id: string){
    try {
      setList((prevState) => prevState.slice(1));
      await dislikeAction({ variables:  { id } });
       
    } catch (error) {
      console.log(error);
    }
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: ( _, {dx, dy, y0, x0 } ) => {
      swipe.setValue({ x: dx, y: dy });
      titlSign.setValue(x0 > cardWidth / 2 ? 1 : -1);
    },
    onPanResponderRelease: ( _, { dx, dy } ) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > cardWidth / 2;
      
      if(isActionActive){
        Animated.timing(swipe, {
          duration: 400,
          toValue: { x: direction * (width + 0.5 * width), y: dy },
          useNativeDriver: true,
        }).start(() => removeTop(direction))
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
      }
  }); 
  
  const removeTop = useCallback(
    (direction: number ) => {
      const { id } = list[0];
      console.log('removeTop ');
      if(direction > 0) handleLike(id);
      if(direction < 0) handleDislike(id);
      swipe.setValue({ x: 0, y: 0 });
    },
    [swipe, list],
  )

  const handleSwipe = useCallback((direction) => {
    Animated.timing(swipe.x, {
      toValue: direction * (width + 0.5 * width),
      duration: 400,
      useNativeDriver: true,
    }).start(() => removeTop(direction));
  }, [removeTop, swipe.x])

  if (loading) return <ScreenLoader />;
  
  return(
    <Container>
      
    {!loading && list && list
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

      {!loading && list.length > 0 && <ButtonsFooter 
          likeAction={() => handleSwipe(1)}
          dislikeAction={() => handleSwipe(-1)}
          favoriteAction={() => console.log("FavoriteAction")}        
        />}
    </Container>
  );
};