import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.warning};
  /* margin: ${RFValue(10)}px 0px; */
`;


export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(4)}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputBox = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;