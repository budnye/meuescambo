import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Form = styled.View`
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
  justify-content: center;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const ErrorBox = styled.View`
  margin-top: 8px;
  align-items: center;
  height: 16px;
`;

export const Error = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.warning};
  /* margin: ${RFValue(10)}px 0px; */
`;
