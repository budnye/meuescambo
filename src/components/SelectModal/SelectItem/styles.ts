import styled from 'styled-components/native';

interface SelectItemProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity`
  margin: 6px;
`;

export const Title = styled.Text<SelectItemProps>`
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : '#000')};
  font-size: 22px;
  font-family: ${({ theme, selected }) =>
    selected ? theme.fonts.bold : theme.fonts.regular};
`;
