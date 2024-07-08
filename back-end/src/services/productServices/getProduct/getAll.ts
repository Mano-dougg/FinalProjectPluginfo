import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class GetProducts {

    static async getAll (req: Request ,res: Response) {
        try {
            const produtos = await prisma.produto.findMany()

            return res.status(200).json(produtos)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})

        }
    }

    static async getProductById(req: Request, res: Response) {
        const { id } = req.params;
    
        try {
            const produto = await prisma.produto.findUnique({
                where: { id: Number(id) },
                include: { imagePath: true }
            });
    
            if (!produto) {
                return res.status(404).json({ msg: "Produto não encontrado" });
            }
    
            return res.status(200).json(produto);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" });
        }
    }


}

export default GetProducts;