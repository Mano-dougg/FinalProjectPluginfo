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


const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

routes.get('/getAllProducts', GetProducts.getAll);
routes.get('/getProductsNames', GetProductsName.getProductsName);
routes.get('/searchProduct', GetProductsName.getProductByname);
routes.get('/filterProducts', FilterProducts.getFilteredProducts);
routes.get('/carProducts', CarProducts.getCarProducts);

routes.put('/editProduct/:id', upload.any(), (req, res) => {
    UpdateProduct.editProduct(req, res);
});

routes.delete('/deleteProduct/:id', (req, res) => {
    DeleteProduct.deleteProduct(req, res);
});

export { routes };

