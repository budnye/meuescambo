import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;