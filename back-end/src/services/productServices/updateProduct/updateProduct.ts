import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import UploadImagesService from "../../imagesService/uploadImagesService";

const prisma = new PrismaClient()

/**
 * Classe UpdateProduct para lidar com operações de atualização de produto.
 */
class UpdateProduct {

    /**
     * Recebe o ID para buscar o produto e os dados que serão atualizados.
     * Retorna uma mensagem de resposta.
     * @param imagesToDelete - url das imagens 
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     * @throws {Error} Se ocorrer algum erro durante o processo, envia uma resposta com status 500.
     */
    static async editProduct (req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {
                nome, marca, preco, preco_alterado, promocao, descricao,
                quantidade_carrinho, face, labios, olhos, kits, sombrancelha, unhas, original,
                imagesToDelete
            } = req.body;

            let produto = await prisma.produto.findUnique({where: { id: Number(id) }});

            // CHECK IF PRODUCT EXISTS
            if (!produto) {
                return res.status(422).json({ msg: "Nenhum produto foi encontrado"})
            }

             // Deleta as imagens especificadas do S3 e do banco de dados
            if (Array.isArray(imagesToDelete) && imagesToDelete.length > 0) {

                // filtra as strings vazias mandadas no form-data
                const filteredImagesToDelete = imagesToDelete.filter(url => url.trim() !== '');
                
                if (filteredImagesToDelete.length > 0) {
                    await UploadImagesService.deleteImages(filteredImagesToDelete);
                } 
            }

            const newImageUrls = await UploadImagesService.saveImages(req, res);

            if (Array.isArray(imagesToDelete) && imagesToDelete.length > 0) {

                // filtra as strings vazias
                const filteredImagesToDelete = imagesToDelete.filter(url => url.trim() !== '');
                if (filteredImagesToDelete.length > 0) {
                    await UploadImagesService.deleteImages(filteredImagesToDelete);
                }
            }

            produto = await prisma.produto.update({ 
                where: { id: Number(id) },
                data: { nome,
                    marca,
                    preco: parseFloat(preco),
                    preco_alterado: parseFloat(preco_alterado),
                    promocao: parseFloat(promocao),
                    descricao,
                    quantidade_carrinho: parseInt(quantidade_carrinho),
                    face: (face) === 'true',
                    labios : (labios) === 'true',
                    olhos: (olhos) === 'true',
                    kits: (kits) === 'true',
                    sombrancelha: (sombrancelha) === 'true',
                    unhas: (unhas) === 'true',
                    original: (original) === 'true',
                    imagePath: {
                        deleteMany: {
                            url: { in: imagesToDelete }
                        },
                        createMany: {
                            data: newImageUrls.map(url => ({ url })),
                        },
                    },
                },
                include: { imagePath: true }
            });
            
            res.status(200).json({ msg: 'Produto atualizado com sucesso' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde' });
        }
    }
}

export default UpdateProduct;