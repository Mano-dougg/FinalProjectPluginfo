import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import UploadImagesService from '../services/productServices/postProduct/uploadImagesService';
import PostProduct from '../services/productServices/postProduct/postProduct';

const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

export { routes };

