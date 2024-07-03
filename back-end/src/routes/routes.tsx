import multer from 'multer';
import { Request, Response, Router } from 'express';
import multerConfig from '../config/multer'
import UploadImagesService from '../services/productServices/postProduct/uploadImagesService';

const routes = Router();    
const upload = multer(multerConfig);

routes.post('/postProduct', upload.single('file'), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
        }

        const { filename } = req.file;
        const uploadImagesService = new UploadImagesService();

        await uploadImagesService.execute(filename);

        return res.json({ msg: 'Imagem salva com sucesso' });
    } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).json({ error: 'Erro ao fazer upload do arquivo' });
    }
});

export { routes };

