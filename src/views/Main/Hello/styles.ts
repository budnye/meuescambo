import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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