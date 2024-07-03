import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { resolve } from "path";
import multer from '../config/multer';
import { lookup } from 'mime-types';
import { promises as fsPromises } from 'fs';
import { fromEnv } from "@aws-sdk/credential-provider-env";
require('dotenv').config();

class S3Storage {
    private client: S3Client;

    constructor() {
        this.client = new S3Client({
            region: 'sa-east-1',
            credentials: fromEnv(),
        });
    }

    async saveFile(filename: string): Promise<string> {
        const originalPath = resolve(multer.directory, filename);

        const contentType = lookup(originalPath);

        if (!contentType) {
            throw new Error("File not found");
        }

        const fileContent = await fsPromises.readFile(originalPath);

        try {
            const command = new PutObjectCommand({
                Bucket: 'shine-original',
                Key: filename,
                Body: fileContent,
                ACL: 'public-read',
                ContentType: contentType,
            });

            const data = await this.client.send(command);

            const url = `${filename}`;
            console.log(`File uploaded successfully to ${url}`);

            await fsPromises.unlink(originalPath);

            return url; // Retorna a URL da imagem após o upload
        } catch (error) {
            console.error(`Error uploading file: ${error}`);
            throw error;
        }
    }
}

export default S3Storage;