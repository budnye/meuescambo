import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  showverticalScrollIndicator: false,
  horizontal: false,
  contentContainerStyle: {
    padding: 10,
  },
})`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text``;
