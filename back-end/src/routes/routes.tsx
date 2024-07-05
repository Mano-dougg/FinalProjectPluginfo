import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import PostProduct from '../services/productServices/postProduct/postProduct';
import DeleteProduct from '../services/productServices/deleteProduct/deleteProdutc';
const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

routes.delete('/deleteProduct/:id', (req, res) => {
    DeleteProduct.deleteProduct(req, res);
});

export { routes };

