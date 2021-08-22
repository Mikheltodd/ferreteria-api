const productResolver = {
  Query: {
    getProduct: (_, { userId, id }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) return dataSources.productAPI.getProduct(id);
      else return null;
    },
  },
  Mutation: {},
};

module.exports = productResolver;
