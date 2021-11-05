import styled from 'styled-components/native';

interface SelectItemProps {
  selected: boolean;
}

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
  flex-direction: row;
`;

export const Title = styled.Text<SelectItemProps>`
  color: ${props => (props.selected ? '#fff' : '#000')};
`;