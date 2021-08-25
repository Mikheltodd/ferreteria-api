const productResolver = {
  Query: {
    getProduct: (_, { userId, id }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) return dataSources.productAPI.getProduct(id);
      else return null;
    },
  },
  Mutation: {
    createProduct: (_, { userId, product }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.productAPI.createProduct(product);
      else return null;
    },
    deleteProduct: (_, { userId, id }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.productAPI.deleteProduct(id);
      else return null;
    },
  },
};

module.exports = productResolver;
