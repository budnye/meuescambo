import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
interface IconProps {
  name: string;
  color?: string;
}

export const Container = styled(TextInput)`
  width: 100%;
  padding: 8px;
  color: ${({theme}) => theme.colors.textDark};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Box = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
  /* align-items: center; */
  /* border-color: ${({theme}) => theme.colors.secondary};
  border-bottom-width: 1px;
  margin-bottom: 16px; */
  /* width: 100%; */
`;

export const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: ${({theme}) => theme.colors.secondary};
  border-bottom-width: 1px;
  width: 100%;
`;


export const Icon = styled(FontAwesome)<IconProps>`
  font-size: ${ RFValue(18)}px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${({ theme, color }) => color ? color : theme.colors.primary};
`;

export const ErrorBox = styled.View`
  margin-top: 8px;
  /* border: 1px solid red */
  height: 16px;
`;

export const Error = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.warning};
  /* margin: ${RFValue(10)}px 0px; */
`;