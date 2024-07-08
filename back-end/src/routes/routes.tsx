import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import PostProduct from '../services/productServices/postProduct/postProduct';
import DeleteProduct from '../services/productServices/deleteProduct/deleteProdutc';
import GetProducts from '../services/productServices/getProduct/getAll';
import GetProductsName from '../services/productServices/getProduct/getProductsName';
import FilterProducts from '../services/productServices/getProduct/FilterProduct';
import UpdateProduct from '../services/productServices/updateProduct/updateProduct';
import CarProducts from '../services/productServices/getProduct/CarProducts';
import Cart from '../services/productServices/updateProduct/carProducts';


const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

routes.get('/getAllProducts', GetProducts.getAll);
routes.get('/getProductsNames', GetProductsName.getProductsName);
routes.get('/searchProduct/:nomeProduto', GetProductsName.getProductByname);
routes.get('/searchProductId/:id', GetProducts.getProductById);
routes.get('/searchProduct/:lettersProduto', GetProductsName.getProductByLetters)
routes.get('/filterProducts', FilterProducts.getFilteredProducts);
routes.get('/carProducts', CarProducts.getCarProducts);

routes.put('/editProduct/:id', upload.any(), (req, res) => {
    UpdateProduct.editProduct(req, res);
});

routes.put('/updateCart', Cart.updateCartProducts);


routes.delete('/deleteProduct/:id', (req, res) => {
    DeleteProduct.deleteProduct(req, res);
});

export { routes };

