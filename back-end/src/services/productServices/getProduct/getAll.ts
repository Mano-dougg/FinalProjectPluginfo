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
}

export default GetProducts;