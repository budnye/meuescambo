import { gql } from '@apollo/client';

// Queries
export const GET_USER = gql`
  query {
    getUser {
      name
      email
    }
  }
`;

export const GET_USER_PRODUCTS = gql`
  query {
    userProducts{
      id
      name
      description
      categories {
        id
        name
        description
        image_url
      }
    }
  }
`;

export const GET_FEED = gql`
  query GetFeed {
    products {
      id
      name
      description
      image_url
      categories {
        id
        name
      }
      likedByUser
      dislikedByUser
  }
}
`;

export const GET_CATEGORIES= gql`
  query GetCategories {
    categories {
    id
    name
  }
}
`;


// Mutations
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

export const REGISTER_PRODUCT = gql`
  mutation RegisterProduct($name: String!, $description: String!, $image_url: String!, $categories: [String!]!) {
    createProduct(data: {name: $name , description: $description, image_url: $image_url, categories: $categories}) {
      id
      name
  }
}
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($name: String!, $email: String!) {
    updateUser(data: {name: $name , email: $email}) {
      id
      name
      email
  }
}
`;

export const LIKE_ACTION = gql`
  mutation LikeAction($id: String!) {
    likeProduct(data: {id: $id}){
      product{
        id
        name
      }
    }
  }
`;

export const DISLIKE_ACTION = gql`
  mutation DislikeAction($id: String!) {
    dislikeProduct(data: {id: $id}){
      product{
        id
        name
      }
    }
  }
`;
