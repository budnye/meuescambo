import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TopBox = styled.View`
  width: 100%;
  height: ${RFPercentage(50)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TitleBox = styled.View`
  position: absolute;
  top: ${RFPercentage(55)}px;
  width: 90%;
  padding: ${RFValue(16)}px;;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const InfoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: ${RFPercentage(5)}px;
  height: 100px;
  width: 90%;
  /* padding: ${RFValue(16)}px;; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

export const FooterInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  text-align: center;
  text-decoration: underline;
  margin-bottom: ${RFValue(10)}px;`;