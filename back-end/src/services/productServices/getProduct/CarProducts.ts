import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class CarProducts {

    static async getCarProducts (req: Request, res: Response) {
        try {
            const produtos = await prisma.produto.findMany({
                where: {
                    quantidade_carrinho: {
                        gt: 0
                    }
                }
            });

            return res.status(200).json(produtos);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" });
        }
    }
}

export default CarProducts;