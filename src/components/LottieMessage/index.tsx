import React, { useEffect, useRef } from 'react';
import { Container, Title, InfoText, Footer } from './styles';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { Button } from '../Button';
export function LottieMessage({
  navigation,
  message,
  title,
  lottie,
  path,
  button,
}) {
  const width = Dimensions.get('window').width;

  return (
    <Container>
      <Title>{title}</Title>
      <LottieView
        style={{
          width: width * 0.6,
          height: width * 0.6,
        }}
        autoPlay={true}
        // loop={false}
        source={lottie}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <InfoText>{message}</InfoText>
      <Footer>
        {button && (
          <Button title={button} onPress={() => navigation.navigate(path)} />
        )}
      </Footer>
    </Container>
  );
}
