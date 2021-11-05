import styled from 'styled-components/native';

import { FAB } from 'react-native-paper';
export const Title = styled.Text``;
export const FabButton = styled(FAB)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 99;
`;
