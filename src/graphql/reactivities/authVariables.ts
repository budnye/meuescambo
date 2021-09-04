import { makeVar, gql } from "@apollo/client";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const auth = makeVar(false);

// This is the query to get the auth reactive variable.
export const GET_AUTH = gql`
  query getAuth{
    auth @client
  }
`
