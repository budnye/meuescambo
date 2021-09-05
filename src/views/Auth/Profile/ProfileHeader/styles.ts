import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  /* flex: 1; */
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const LocationInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const TopBox = styled.View`
  width: 100%;
  height: ${RFPercentage(25)}px;
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LocationBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.View`
  position: absolute;
  top: ${RFPercentage(15)}px;
`;

export const InfoBox = styled.View`
  position: absolute;
  top: ${RFPercentage(36)}px;
`;

export const LocationIcon = styled(FontAwesome)`
  font-size: ${RFValue(12)}px;
  margin-right: 5px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.primary};
`;
