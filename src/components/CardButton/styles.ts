import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonProps } from '.';
import { Animated, TouchableWithoutFeedback } from 'react-native';

interface ContainerProps {
  type?: 'small' | 'large';
}

export const Container = styled(Animated.View)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  width: ${({ type }) => (type == 'small' ? 50 : 55)}px;
  height: ${({ type }) => (type == 'small' ? 50 : 55)}px;
  border-radius: 50px;
  margin: 8px 16px;
  box-shadow: 3px 3px 3px #eee;
  
`;
export const Touchable = styled(TouchableWithoutFeedback)`

`;

export const Icon = styled(FontAwesome)<ButtonProps>`
  font-size: ${({ type }) => (type == 'small' ? RFValue(20) : RFValue(24))}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`;
