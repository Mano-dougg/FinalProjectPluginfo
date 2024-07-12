import { Request, Response } from 'express';
import S3Storage from "../../utils/S3Storage";

const s3Storage = new S3Storage();

class UploadImagesService {
    private s3Storage: S3Storage;

    constructor() {
        this.s3Storage = new S3Storage();
    }

    async execute(filename: string): Promise<void> {
        try {
            await this.s3Storage.saveFile(filename);

        } catch (error) {
            console.error('Error saving file to S3:', error);
            throw new Error('Error saving file to S3');
        }
    }

    async saveImages(req: Request, res: Response): Promise<string[]> {
        try {           
            if (!req.files || req.files.length === 0) {
                console.error('No files uploaded');
                throw new Error('No files uploaded');
            }

            const uploadPromises = (req.files as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
                const { filename } = file;
                const url = await s3Storage.saveFile(filename);
                return url;
            });

            const urls: string[] = await Promise.all(uploadPromises);

            return urls; 
        } catch (error) {
            console.error('Error uploading files:', error);
            throw new Error('Error uploading files');
        }
    }

    async updateImages(req: Request, res: Response): Promise<string[]> {
        try {
            if (!req.files || req.files.length === 0) {
                console.log('No files uploaded for update');
                return [];
            }

            const uploadPromises = (req.files as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
                const { filename } = file;
                const url = await s3Storage.saveFile(filename);
                return url;
            });

            const urls: string[] = await Promise.all(uploadPromises);

            return urls; 
        } catch (error) {
            console.error('Error uploading files:', error);
            throw new Error('Error uploading files');
        }
    }

    async deleteImages(imagePaths: string | string[]): Promise<void> {
        const filenames = Array.isArray(imagePaths) ? imagePaths : [imagePaths];

        const deletePromises = filenames.map(filename => this.s3Storage.deleteFile(filename));

        try {
            await Promise.all(deletePromises);
        } catch (error) {
            console.error('Error deleting files from S3:', error);
            throw new Error('Error deleting files from S3');
        }
    }
}


export default new UploadImagesService();