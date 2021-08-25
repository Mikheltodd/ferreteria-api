const { RESTDataSource } = require("apollo-datasource-rest");

const serverConfig = require("../server");

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.product_api_url;
  }

  async getProduct(id) {
    return await this.get(`/products/${id}`);
  }

  async createProduct(product) {
    product = new Object(JSON.parse(JSON.stringify(product)));
    return await this.post("/products/create", product);
  }

  async deleteProduct(id) {
    return await this.delete(`/products/delete/${id}`);
  }

  async newTransaction(transaction) {
    transaction = new Object(JSON.parse(JSON.stringify(transaction)));
    return await this.post("/transactions/new", transaction);
  }
}

module.exports = ProductAPI;
