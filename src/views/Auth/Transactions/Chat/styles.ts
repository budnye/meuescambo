import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text``;

export const MessageList = styled.FlatList.attrs({
  showverticalScrollIndicator: false,
  horizontal: false,
  contentContainerStyle: {
    paddingTop: 32,
    paddingBottom: 32,
  },
})`
  flex: 1;
  width: 100%;
  margin-top: ${RFPercentage(1)}px;
  background-color: ${({ theme }) => theme.colors.textLight};
`;
