import multer from 'multer';
import { Router } from 'express'
import { Request, Response } from 'express';
import multerConfig from '../config/multer'
import uploadImagesService from '../services/productServices/postProduct/uploadImagesService';

const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.single("file"), uploadImagesService.uploadImagesService) 

export { routes }

