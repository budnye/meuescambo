import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  /* border: 1px solid red; */
  width: 85%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(4)}px;
`;

export const InputBox = styled.View`
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  /* border: 1px solid red; */
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 16px;
`;