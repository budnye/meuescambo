import React, { useEffect, useRef } from 'react';
import { Container, Title, InfoText, Footer } from './styles';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { Button } from '../../../../components/Button';
export function Welcome({ navigation }){
  const width = Dimensions.get('window').width; 


  return(
    <Container>
      <Title>Olá vamos começar?</Title>
      <LottieView
          style={{
            width: width * 0.6,
            height: width * 0.6,
          }}
          autoPlay={true}
          // loop={false}
          source={require('../../../../assets/lottie/product.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
      <InfoText>Não encontramos nenhum produto cadastrado, para começar a fazer escambo você precisa ter pelo menos um produto.</InfoText>
      <Footer>
        <Button
          title={'Cadastrar'}
          onPress={() => navigation.navigate('products')}
        />
      </Footer>
    </Container>
  );
};