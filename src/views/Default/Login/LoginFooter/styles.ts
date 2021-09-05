import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  /* border: 1px solid red; */
  padding: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  text-align: center;
  text-decoration: underline;
  margin: ${RFValue(10)}px 0px;
  color: ${({ theme }) => theme.colors.black};
`;
