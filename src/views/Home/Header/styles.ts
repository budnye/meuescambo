import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  /* border: 1px solid black; */
  width: 100%;
  position: absolute;
  top: ${getStatusBarHeight()}px;
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.View`
  /* border: 1px solid black; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const ButtonsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${RFValue(20)}px;
`;


export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(18)}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IconButton = styled(FontAwesome)`
  font-size: ${RFValue(18)}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;