import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-bottom: ${RFValue(3)}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Line = styled.View`
  border: 1px solid rgba(92, 92, 92, 0.3);
  /* background-color: red; */
  height: ${RFValue(1)}px;
  width: ${RFValue(20)}px;
  margin: 32px 8px;
`;
