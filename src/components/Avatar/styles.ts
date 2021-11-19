import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AvatarProps } from './index';
export const Container = styled.View``;

export const Title = styled.Text``;

export const ImgBox = styled.View`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 150px;
  padding: ${RFValue(3)}px;
`;
export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#2b6777',
})`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(20)}px;
`;
export const AvatarImg = styled.Image<AvatarProps>`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(20)}px;
  border-radius: 150px;
`;
