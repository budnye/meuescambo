import { Animated } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CardProps } from '.';


export const Container = styled(Animated.View)<CardProps>`
  position: absolute;
  top: 50px;
  left: ${({ type }) => (type === 'dislike' ? 'auto' : 45+'px')};
  right: ${({ type }) => (type === 'like' ? 'auto' : 45+'px')};
  border: 4px;
  border-radius: 10px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  border-color: ${({ type, theme }) => (type === 'like' ? theme.colors.success : theme.colors.warning)};
`;

export const Title = styled.Text<CardProps>`
  color: ${({ type, theme }) => (type === 'like' ? theme.colors.success : theme.colors.warning)};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;