import { makeVar, gql } from '@apollo/client';
import { getAuth } from '../../services/asyncstorage';

export const auth = makeVar(getAuth);

// This is the query to get the auth reactive variable.
export const GET_AUTH = gql`
  query getAuth {
    auth @client
  }
`;
