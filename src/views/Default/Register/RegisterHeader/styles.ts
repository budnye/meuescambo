import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  width: 90%;
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