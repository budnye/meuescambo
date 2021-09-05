import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(18)}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;
