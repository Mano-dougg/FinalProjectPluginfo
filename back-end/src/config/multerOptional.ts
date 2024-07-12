import multer from 'multer';
import multerConfig from '../config/multer';
import { Request, Response, NextFunction } from 'express';

const upload = multer(multerConfig).any();

const optionalUpload = (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: 'An error occurred while uploading files.' });
        }
        next();
    });
};

export { upload, optionalUpload };