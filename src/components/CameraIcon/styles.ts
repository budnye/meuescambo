import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text``;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(40)}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`;

export const ImgBox = styled.View`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.textLight};
  border-radius: 150px;
  padding: ${RFValue(3)}px;
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(20)}px;
  border-radius: 150px;
`;
