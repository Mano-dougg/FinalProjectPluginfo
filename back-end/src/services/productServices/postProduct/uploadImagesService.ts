import { Request, Response } from 'express';
import S3Storage from "../../../utils/S3Storage";

class UploadImagesService {
    private s3Storage: S3Storage;

    constructor() {
        this.s3Storage = new S3Storage();
    }

    async execute(filename: string): Promise<void> {
        try {
            console.log('Saving file to S3:', filename);
            await this.s3Storage.saveFile(filename);
            console.log('File saved successfully:', filename);
        } catch (error) {
            console.error('Error saving file to S3:', error);
            throw new Error('Error saving file to S3');
        }
    }

    async uploadImagesService(req: Request, res: Response) {
        try {
            console.log('Received request to upload images');
            
            if (!req.files || req.files.length === 0) {
                console.error('No files uploaded');
                return res.status(400).json({ error: 'No files uploaded' });
            }

            console.log('Files received:', req.files.length);

            await Promise.all(
                (req.files as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
                    const { filename } = file;
                    await this.execute(filename);
                })
            );

            console.log('All files uploaded successfully');
            return res.status(200).json({ msg: 'Images saved successfully' });
        } catch (error) {
            console.error('Error uploading files:', error);
            return res.status(500).json({ error: 'Error uploading files' });
        }
    }
}

export default new UploadImagesService();