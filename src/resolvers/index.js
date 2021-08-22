const productResolver = require("./product_resolver");
const transactionResolver = require("./transaction_resolver");
const userResolver = require("./users_resolver");

const lodash = require("lodash");

const resolvers = lodash.merge(
  productResolver,
  transactionResolver,
  userResolver
);

module.exports = resolvers;
