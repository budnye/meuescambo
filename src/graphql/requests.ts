import { gql } from '@apollo/client'

export const GET_USER = gql`
  query {
  getUser{
    name
    email
  }
}
`

export const LOGIN = gql`
  mutation Login ($email: String!, $password: String!) {
    login(data: {email: $email, password: $password }){
      token
  }
}
`
