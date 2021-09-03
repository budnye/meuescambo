import { makeVar, gql } from "@apollo/client";

export const auth = makeVar(false);

// This is the query to get the auth reactive variable.
export const GET_AUTH = gql`
  query getAuth{
    auth @client
  }
`