import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { alignItems: 'center', padding: 20 },
  showHorizontalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text``;
