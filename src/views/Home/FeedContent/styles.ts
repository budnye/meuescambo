import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const ListContainer = styled(FlatList as new () => FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle:{
    

  }
})`
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
  padding: 8px 0px;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const Title = styled.Text`

`;
