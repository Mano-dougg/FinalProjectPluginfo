import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import UploadImagesService from "../postProduct/uploadImagesService";

const prisma = new PrismaClient()

class UpdateProduct {

    static async editProduct (req: Request, res: Response) {
        
        try {
            const { id } = req.params;
            const {
                nome, marca, preco, preco_alterado, promocao, descricao,
                quantidade_carrinho, face, labios, olhos, kits, sombrancelha, unhas, original,
                imagesToKeep, imagesToDelete
            } = req.body;

            let produto = await prisma.produto.findUnique({where: { id: Number(id) }});

            // CHECK IF PRODUCT EXISTS
            if (!produto) {
                return res.status(422).json({ msg: "Não foi possível encontrar esse membro"})
            }

             // Deleta as imagens especificadas do S3 e do banco de dados
             if (imagesToDelete && imagesToDelete.length > 0) {
                await UploadImagesService.deleteImagesService(imagesToDelete);
            }

            // Chama o serviço de upload para obter as URLs das novas imagens
            const newImageUrls = await UploadImagesService.uploadImagesService(req, res);

            // Verifica se newImageUrls é um array de strings antes de prosseguir
            if (!Array.isArray(newImageUrls) || newImageUrls.some(url => typeof url !== 'string')) {
                throw new Error('newImageUrls must be an array of strings');
            }

            // Filtra apenas os campos que estão presentes no req.body
            const updateData: any = {};
            if (nome) updateData.nome = nome;
            if (marca) updateData.marca = marca;
            if (preco) updateData.preco = preco;
            if (preco_alterado) updateData.preco_alterado = preco_alterado;
            if (promocao) updateData.promocao = promocao;
            if (descricao) updateData.descricao = descricao;
            if (quantidade_carrinho) updateData.quantidade_carrinho = quantidade_carrinho;
            if (face) updateData.face = face;
            if (labios) updateData.labios = labios;
            if (olhos) updateData.olhos = olhos;
            if (kits) updateData.kits = kits;
            if (sombrancelha) updateData.sombrancelha = sombrancelha;
            if (unhas) updateData.unhas = unhas;
            if (original) updateData.original = original;


            produto = await prisma.produto.update({ 
                where: { id: Number(id) },
                data: { nome,
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
                    original,imagePath: {
                        deleteMany: {
                            url: { notIn: imagesToKeep }
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