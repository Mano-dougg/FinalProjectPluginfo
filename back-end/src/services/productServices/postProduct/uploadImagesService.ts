import S3Storage from "../../../utils/S3Storage";

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
}

export default UploadImagesService;