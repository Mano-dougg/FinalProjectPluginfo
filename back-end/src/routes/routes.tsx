import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import PostProduct from '../services/productServices/postProduct/postProduct';
import DeleteProduct from '../services/productServices/deleteProduct/deleteProdutc';
import GetProducts from '../services/productServices/getProduct/getAll';
import GetProductsName from '../services/productServices/getProduct/getProductsName';
const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

routes.delete('/deleteProduct/:id', (req, res) => {
    DeleteProduct.deleteProduct(req, res);
});

routes.get('/getAllProducts', GetProducts.getAll);

routes.get('/getProductsNames', GetProductsName.getProductsName);
routes.get('/searchProduct', GetProductsName.getProductByname);

export { routes };

