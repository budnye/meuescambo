import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`

`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${RFPercentage(10)}px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
`;


