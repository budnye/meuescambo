import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TextInput)`
  width: 100%;
  padding: 8px;
  color: ${({theme}) => theme.colors.textDark};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Box = styled.View`
  border-color: ${({theme}) => theme.colors.secondary};
  border-bottom-width: 1px;
  margin-bottom: 16px;
`;

