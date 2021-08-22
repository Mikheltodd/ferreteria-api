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
}

module.exports = ProductAPI;
