import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  showverticalScrollIndicator: false,
  horizontal: false,
})`
  flex: 1;
  width: 100%;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Title = styled.Text``;

export const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 85%;
`;
