import { gql } from "@apollo/client";
let CREATEUSER = gql`
  mutation createUser(
    $name: String!
    $phone: String!
    $password: String!
    $type: String!
    $email: String!
  ) {
    createUser(name: $name, phone: $phone, password: $password, type: $type) {
      {
    user {
      id
      name
      phone
      email
      password
      type
      balance
      currency
      createdAt
    }
    token
  }
    }
  }
`;
const LOGIN = gql`
  mutation Mutation($phone: String!, $password: String!) {
    login(phone: $phone, password: $password){
      {
    user {
      id
      name
      phone
      email
      password
      type
      balance
      currency
      createdAt
    }
    token
  }
    }
  }
`;
export { CREATEUSER, LOGIN };
