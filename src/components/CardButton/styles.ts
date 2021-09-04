import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonProps } from '.';
import { TouchableOpacity } from 'react-native';

interface ContainerProps {
  type?: 'small' | 'large';
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.3,
})<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  width: ${({ type }) => (type == 'small' ? 40 : 45)}px;
  height: ${({ type }) => (type == 'small' ? 40 : 45)}px;
  border-radius: 50px;
  margin: 8px 16px;
  box-shadow: 3px 3px 3px #eee;
`;

export const Title = styled.Text``;

export const Icon = styled(FontAwesome)<ButtonProps>`
  font-size: ${({ type }) => (type == 'small' ? RFValue(16) : RFValue(18))}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`;
