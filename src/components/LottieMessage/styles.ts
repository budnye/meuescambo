import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 85%;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(22)}px;
  margin-bottom: ${RFValue(16)}px;
  margin-top: ${RFValue(32)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: center;
  margin-bottom: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 16px;
`;