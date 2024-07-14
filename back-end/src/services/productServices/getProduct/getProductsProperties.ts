import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class GetProductsProperties {

    /**
     * Retorna uma lista com o nome de todos os produtos
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>} 
     */
    static async getProductsName (req: Request ,res: Response) {
        try {
            const produtos = await prisma.produto.findMany();

            const nomesDosProdutos = produtos.map(produto => produto.nome);

            if (!produtos) { return res.status(404).json({ msg: "Produto não encontrado" }) };

            return res.status(200).json(nomesDosProdutos);

        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    }   
}

export default GetProductsProperties;