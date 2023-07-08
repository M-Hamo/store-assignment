export class Endpoints {
  public authentication = {
    login: 'auth/local/',
  };

  public products = {
    getAllProducts: 'products',
    addNewProduct: 'products',
    getProduct: 'products/',
    updateProduct: 'products/',
    deleteProduct: 'products/',
  };

  public dashboard = {
    getAllProducts: 'products',
    deleteProduct: 'products/',
    updateProduct: 'products/',
    addNewProduct: 'products',
  };

  public categories = {
    getCategories: 'products/categories',
    getCategoryProducts: 'products/category/',
  };
}
