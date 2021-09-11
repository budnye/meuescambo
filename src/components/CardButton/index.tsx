import React, { useCallback, useRef } from 'react';
import { Animated } from 'react-native';
import { Container, Icon, Touchable } from './styles';
export interface ButtonProps {
  name: string;
  color?: string;
  size?: number;
  type?: 'small' | 'large';
  onPress?: () => void;
}

export function CardButton({ name, color, size, type, onPress }: ButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

const animatedScale = useCallback(
  (newValue) => {
    Animated.spring(scale, {
      toValue: newValue,
      friction: 4,
      useNativeDriver: true,
  }).start();
  },
  [scale],
)
  return (
    <Touchable 
      onPress={onPress}
      onPressIn={() => animatedScale(0.8)}
      onPressOut={() => animatedScale(1)}
      delayPressIn={0}
      delayPressOut={110}
    >
    <Container type={type} style={{transform: [{ scale }]}}>
      <Icon name={name} size={size} color={color} />
    </Container>
    </Touchable>
  );
}
