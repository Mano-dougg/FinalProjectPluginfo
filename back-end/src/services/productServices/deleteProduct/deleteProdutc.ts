import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import UploadImagesService from '../postProduct/uploadImagesService';

const prisma = new PrismaClient();

class DeleteProduct {
    static async deleteProduct(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const product = await prisma.produto.findUnique({
                where: { id: Number(id) },
                include: { imagePath: true }
            });

            if (!product) {
                return res.status(404).json({ msg: 'Produto não encontrado' });
            }

            const imagePaths = product.imagePath.map(image => image.url);

            await UploadImagesService.deleteImagesService(imagePaths);

            await prisma.produto.delete({
                where: { id: Number(id) }
            });

            res.status(200).json({ msg: 'Produto deletado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde' });
        }
    }
}

export default DeleteProduct;