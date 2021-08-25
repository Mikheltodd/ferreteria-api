const { gql } = require("apollo-server");

const productTypeDefs = gql`
  type Product {
    id: String!
    name: String
    quantity: Int
    price: Int
  }

  input ProductInput {
    id: String!
    name: String
    quantity: Int
    price: Int
  }

  type Query {
    getProduct(userId: String!, id: String!): Product
  }

  type Mutation {
    createProduct(product: ProductInput!): Product
  }

  type Mutation {
    deleteProduct(id: String!): String
  }
`;

module.exports = productTypeDefs;
