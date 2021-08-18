import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface ButtonProps {
  primary: boolean;
}


export const Container = styled.TouchableOpacity<ButtonProps>`
  border-radius: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 6px 0px;
  padding: ${RFValue(12)}px;
  background: ${(props) => (props.primary ? props.theme.colors.primary : props.theme.colors.secondary)};
`;

export const Title = styled.Text<ButtonProps>`
  color: ${(props) => (props.primary ? props.theme.colors.textLight : props.theme.colors.primary)};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;