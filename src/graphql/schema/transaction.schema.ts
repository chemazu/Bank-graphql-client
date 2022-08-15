import { gql } from "@apollo/client";

const CREATE_TRANSACTION = gql`
  mutation Mutation(
    $phone: String!
    $amount: Int!
    $narration: String!
    $transactionType: String!
  ) {
    createTransaction(
      phone: $phone
      amount: $amount
      narration: $narration
      transactionType: $transactionType
    ) {
      phone
      id
      amount
      narration
      transactionType
      userId
      balanceAfter
      createdAt
    }
  }
`;
export { CREATE_TRANSACTION };

const GET_TRANSACTIONS = gql`
  query Query($phone: String!) {
    getTransactions(phone: $phone) {
      id
      phone
      amount
      narration
      transactionType
      userId
      balanceAfter
      createdAt
    }
  }
`;

export { GET_TRANSACTIONS };
