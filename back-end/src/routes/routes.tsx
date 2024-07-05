import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import UploadImagesService from '../services/productServices/postProduct/uploadImagesService';

const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.any(), (req, res) => {
    UploadImagesService.uploadImagesService(req, res);
});

export { routes };

