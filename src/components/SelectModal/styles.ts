import styled from 'styled-components/native';

export const Container = styled.Modal`
`;
export const Box = styled.View`
  margin-top: 35%;
  margin-bottom: 10%;
  margin: auto 32px;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  max-height: 80%;
  border-radius: 25px;
  padding: 32px 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`; 

export const Title = styled.Text`
  font-size: 20px;
`;