import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
  max-height: ${RFPercentage(10)}px;
`;

export const Title = styled.Text``;
