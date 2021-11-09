import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${RFValue(32)}px;
  flex: 1;
  align-self: center;
  justify-content: center;
  width: 85%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(16)}px;
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

export const Footer = styled.View`
  width: 100%;
`;
