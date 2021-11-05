import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  padding: ${RFValue(12)}px;
  margin-bottom: ${RFValue(32)}px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-width: 1px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

`;

export const Icon = styled(Feather).attrs({
  name: 'chevron-down'
})`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
