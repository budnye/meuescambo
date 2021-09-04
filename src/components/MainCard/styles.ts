import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
const cardWidth = width * 0.9;

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${cardWidth}px;
  height: ${RFPercentage(80)}px;
  align-self: center;
`;

export const Title = styled.Text``;

export const Image = styled.Image`
  width: 100%;
  height: ${RFPercentage(80) * 0.85}px;
  border-radius: 15px;
`;

export const ImgBox = styled.View`
  border-radius: 10px;
  width: 100%;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin: 16px 0px;
`;

export const InfoBox = styled(LinearGradient)`
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border-radius: 15px;
`;

export const ImageTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
`;

export const ImageInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
`;

export const LocationIcon = styled(FontAwesome)`
  font-size: ${RFValue(8)}px;
  margin-right: 5px;
  margin-top: 2px;
  color: white;
`;

export const LocationBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
