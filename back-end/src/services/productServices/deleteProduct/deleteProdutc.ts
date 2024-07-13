import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import UploadImagesService from '../../imagesService/uploadImagesService';

const prisma = new PrismaClient();

class DeleteProduct {
    
    /**
     * Recebe o ID e apaga o produto correspondente.
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     */
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

            // Delete images associated with the product
            await UploadImagesService.deleteImages(imagePaths);

            // Remove references to the product in the ImagePath table
            await prisma.imagePath.deleteMany({
                where: { produtoId: Number(id) }
            });

            // Now delete the product
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