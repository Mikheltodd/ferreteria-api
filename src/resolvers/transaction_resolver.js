const transactionResolver = {
  Query: {},
  Mutation: {
    createTransacction: (
      _,
      { userId, transaction },
      { dataSources, userIdToken }
    ) => {
      if (userId == userIdToken)
        return dataSources.productAPI.newTransaction(transaction);
      else return null;
    },
  },
};

module.exports = transactionResolver;
