import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

export default {
    directory: tmpFolder, 
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(req: Request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');

            const filename = `${fileHash}-${file.originalname}`;

            return callback(null, filename);
        }
    }) , 
}