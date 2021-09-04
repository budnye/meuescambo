import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    getUser {
      name
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    createUser(data: {name: $name , email: $email, password: $password}) {
      id
      name
      email
  }
}
`;
