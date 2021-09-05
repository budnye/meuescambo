import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const FooterBox = styled.View`
  position: absolute;
  bottom: ${RFPercentage(6)}px;
  width: 85%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  text-align: center;
  text-decoration: underline;
  margin: ${RFValue(10)}px 0px;
  color: ${({ theme }) => theme.colors.black};
`;
