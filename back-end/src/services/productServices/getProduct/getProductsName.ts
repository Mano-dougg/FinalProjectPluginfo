import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class GetProductsName {

    static async getProductsName (req: Request ,res: Response) {
        try {
            const produtos = await prisma.produto.findMany();

            const nomesDosProdutos = produtos.map(produto => produto.nome);

            return res.status(200).json(nomesDosProdutos);

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    }

    static async getProductByname(req: Request, res: Response) {

        const { nomeProduto } = req.params

        try {
            const produto = await prisma.produto.findUnique({where: {nome: nomeProduto}});

            return res.status(200).json(produto);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"});
        }
    }
}

export default GetProductsName;