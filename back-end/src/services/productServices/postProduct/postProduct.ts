import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import UploadImagesService from './uploadImagesService';

const prisma = new PrismaClient();

class PostProduct {
    static async addProduct(req: Request, res: Response) {
        try {
            const {
                nome, marca, preco, preco_alterado, promocao, descricao,
                quantidade_carrinho, face, labios, olhos, kits, sombrancelha, unhas, original
            } = req.body;

            // Chama o serviço de upload para obter as URLs das imagens
            const imageUrls = await UploadImagesService.uploadImagesService(req, res)

            // Verifica se imageUrls é um array de strings antes de prosseguir
            if (!Array.isArray(imageUrls) || imageUrls.some(url => typeof url !== 'string')) {
                throw new Error('Returned URLs are not valid strings');
            }

            const produto = await prisma.produto.create({
                data: {
                    nome,
                    marca,
                    preco,
                    preco_alterado,
                    promocao,
                    descricao,
                    quantidade_carrinho,
                    face,
                    labios,
                    olhos,
                    kits,
                    sombrancelha,
                    unhas,
                    original,
                    imagePath: {
                        createMany: {
                            data: imageUrls.map(url => ({ url }))
                        }
                    }
                }
            });

            res.status(200).json({ msg: 'Produto criado com sucesso', produto });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde' });
        }
    }
}

export default PostProduct;