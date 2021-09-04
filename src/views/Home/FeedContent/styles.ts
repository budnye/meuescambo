import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const ListContainer = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
})`
  width: 100%;
  padding: 8px 0px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text``;
