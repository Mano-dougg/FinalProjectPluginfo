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
            throw new Error('Error saving file to S3');
        }
    }

    async saveImages(req: Request, res: Response): Promise<string[]> {
        try {           
            if (!req.files || req.files.length === 0) {
                throw new Error('Nenhum arquivo baixado');
            }

            const uploadPromises = (req.files as Express.Multer.File[]).map(async (file: Express.Multer.File) => {
                const { filename } = file;
                const url = await s3Storage.saveFile(filename);
                return url;
            });

            const urls: string[] = await Promise.all(uploadPromises);

            return urls; 
        } catch (error) {
            throw new Error('Error ao baixar os arquivos');
        }
    }

    async updateImages(req: Request, res: Response): Promise<string[]> {
        try {
            if (!req.files || req.files.length === 0) {
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
            throw new Error('Erro ao baixar os arquivos');
        }
    }

    async deleteImages(imagePaths: string | string[]): Promise<void> {
        const filenames = Array.isArray(imagePaths) ? imagePaths : [imagePaths];

        const deletePromises = filenames.map(filename => this.s3Storage.deleteFile(filename));

        try {
            await Promise.all(deletePromises);
        } catch (error) {
            throw new Error('Erro ao deletar os arquivos do S3');
        }
    }
}

export default new UploadImagesService();