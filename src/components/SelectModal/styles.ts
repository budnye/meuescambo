import styled from 'styled-components/native';

export const Container = styled.Modal``;
export const Box = styled.View`
  margin-top: 35%;
  margin-bottom: 10%;
  margin: auto 32px;
  align-items: center;
  justify-content: center;
  max-height: 80%;
  border-radius: 25px;
  padding: 16px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 26px;
  margin-top: 8px;
  margin-bottom: 26px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
