import { gql } from "@apollo/client";
 let CREATEUSER = gql`
  mutation createUser(
    $name: String!
    $phone: String!
    $password: String!
    $type: String!
  ) {
    createUser(name: $name, phone: $phone, password: $password, type: $type) {
      name
      phone
      password
      type
      balance
      currency
      createdAt
    }
  }
`;
export { CREATEUSER };

// export const createUser= gql`
//   mutation createUser(
//     $name: String!
//     $phone: String!
//     $password: String!
//     $type: String!
//     $email: String!
//   ) {
//     signup(
//       name: $name
//       phone: $phone
//       email: $email
//       password: $password
//       type: $type
//     ) {
//       # token
//       user {
//         id
//         name
//         phone
//         password
//         type
//         balance
//         currency
//         createdAt
//       }
//     }
//   }
// `;
// export const createUser = gql`
//   mutation createUser(
//     $name: String!
//     $phone: String!
//     $password: String!
//     $type: String!
//     $email: String!
//   ) {
//     createUser(name: $name, phone: $phone, password: $password, type: $type) {
//       name
//       phone
//       password
//       type
//       balance
//       currency
//       createdAt
//     }
//   }
// `;

// OLD CODE:
export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        uuid
        name
        email
        email_verified_at
        email_verification_token
        created_at
        updated_at
      }
      token
    }
  }
`;
export const GETME = gql`
  query GETME {
    getMe {
      uuid
      _id
      name
      email_verification_token
      email_verified_at
    }
  }
`;
export const GETITEMS = gql`
  query GETITEMS {
    getItems {
      items {
        name
        description
        _id
        uuid
      }
      pagination {
        currentPage
        maxPages
      }
    }
  }
`;
export const VERIFYME = gql`
  mutation verifyme($token: String!) {
    verifyMe(token: $token) {
      email_verified_at
      email_verification_token
    }
  }
`;
export const CREATEITEM = gql`
  mutation createItem($name: String!, $description: String) {
    createItem(name: $name, description: $description) {
      _id
      created_at
    }
  }
`;

export const DELETEITEM = gql`
  mutation deleteItem($uuid: ID!) {
    deleteItem(uuid: $uuid) {
      _id
      name
    }
  }
`;
export const UPDATEITEM = gql`
  mutation updateItem($uuid: ID!, $name: String, $description: String) {
    updateItem(uuid: $uuid, name: $name, description: $description) {
      _id
      name
    }
  }
`;
