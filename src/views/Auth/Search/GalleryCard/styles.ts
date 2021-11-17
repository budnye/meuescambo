import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;

export const Container = styled.View`
  width: ${width / 3}px;
  height: ${width / 3}px;
`;

export const Title = styled.Text``;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
