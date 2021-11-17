import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
const cardWidth = width * 0.75;
export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  /* border: 1px solid red; */
  align-items: center;
  flex-direction: column;
  width: ${cardWidth}px;
  height: ${RFPercentage(45)}px;
  align-self: center;
  margin-bottom: ${RFValue(16)}px;
`;

export const Image = styled.Image`
  width: ${cardWidth}px;
  height: ${RFPercentage(45)}px;
  border-radius: 15px;
`;

export const Card = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.Text``;
