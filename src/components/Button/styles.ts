import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface ButtonProps {
  color?: string;
  textColor?: string;
  secondary?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  border-radius: 25px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 6px 0px;
  padding: ${RFValue(12)}px;
  background: ${({ color, theme, secondary, disabled }) =>
    disabled ? theme.colors.disabled :
    !color && !secondary
      ? theme.colors.primary
      : !color
      ? theme.colors.secondary
      : color};
`;

export const Title = styled.Text<ButtonProps>`
  color: ${({ secondary, theme, textColor }) =>
    !textColor && !secondary
      ? theme.colors.textLight
      : !textColor
      ? theme.colors.primary
      : textColor};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
