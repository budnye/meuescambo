import { useQuery, gql } from '@apollo/client'

export const TEST_QUERY = gql`
  query {
    getUsers{
      id
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
