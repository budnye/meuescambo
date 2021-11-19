import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = RFPercentage(40);
const cardWidth = height / 1.3;

export const Container = styled.TouchableOpacity`
  width: ${cardWidth}px;
  height: ${height}px;
  align-self: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.Text``;

export const Image = styled.Image`
  width: 100%;
  height: ${height}px;
  border-radius: 15px;
`;

export const ImgBox = styled.View`
  border-radius: 10px;
  width: 100%;
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
