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
