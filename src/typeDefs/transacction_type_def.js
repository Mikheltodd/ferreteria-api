const { gql } = require("apollo-server");

const transacctionTypeDefs = gql`
  type Transacction {
    id: String!
    productId: String
    type: String
    quantity: Int
    date: String
  }

  input TransacctionInput {
    productId: String
    type: String
    quantity: Int
  }

  type Mutation {
    createTransacction(
      userId: String!
      transaction: TransacctionInput!
    ): Transacction
  }
`;

module.exports = transacctionTypeDefs;
