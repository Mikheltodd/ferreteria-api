const { gql } = require("apollo-server");

const productTypeDefs = gql`
  type Product {
    id: String!
    name: String
    quantity: Int
    price: Int
  }

  type Query {
    getProduct(id: String!): Product
  }
`;

module.exports = productTypeDefs;
