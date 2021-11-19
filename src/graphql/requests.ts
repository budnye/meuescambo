import { gql } from '@apollo/client';

// Queries
export const GET_USER = gql`
  query {
    getUser {
      name
      email
      phone
      avatar
    }
  }
`;

export const GET_USER_PRODUCTS = gql`
  query {
    userProducts {
      id
      name
      description
      image_url
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

export const GET_PRODUCTS = gql`
  query GetProducts($search: String!) {
    searchProducts(search: $search) {
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

export const GET_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(data: { id: $id }) {
      id
      name
      description
      image_url
      categories {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
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
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

export const REGISTER_PRODUCT = gql`
  mutation RegisterProduct(
    $name: String!
    $description: String!
    $image_url: String!
    $categories: [String!]!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        image_url: $image_url
        categories: $categories
      }
    ) {
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: String!
    $name: String
    $description: String
    $image_url: String
    $categories: [String!]
  ) {
    updateProduct(
      data: {
        id: $id
        name: $name
        description: $description
        image_url: $image_url
        categories: $categories
      }
    ) {
      id
      name
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile(
    $name: String
    $email: String
    $avatar: String
    $phone: String
  ) {
    updateUser(
      data: { name: $name, email: $email, avatar: $avatar, phone: $phone }
    ) {
      id
      name
      email
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($password: String!, $oldPassword: String!) {
    updatePassword(data: { password: $password, oldPassword: $oldPassword }) {
      id
      name
      email
    }
  }
`;

export const LIKE_ACTION = gql`
  mutation LikeAction($id: String!) {
    likeProduct(data: { id: $id }) {
      product {
        id
        name
      }
    }
  }
`;

export const DISLIKE_ACTION = gql`
  mutation DislikeAction($id: String!) {
    dislikeProduct(data: { id: $id }) {
      product {
        id
        name
      }
    }
  }
`;
