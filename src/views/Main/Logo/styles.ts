import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.white};

  font-size: ${RFValue(52)}px;
`;

export const TopBox = styled.View`
  width: 100%;
  height: ${RFPercentage(50)}px;
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BrandIcon = styled(FontAwesome)`
  font-size: ${RFValue(90)}px;

  color: ${({ theme }) => theme.colors.secondary};
`;
