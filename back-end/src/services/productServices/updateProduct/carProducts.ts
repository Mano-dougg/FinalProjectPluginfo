import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Cart {

    static async updateCartProducts (req: Request, res: Response) {
        const { id } = req.params;
        const { quantidade_carrinho } = req.body

        try {
            let produto = await prisma.produto.findUnique({where: { id: Number(id) }});

            // CHECK IF PRODUCT EXISTS
            if (!produto) {
                return res.status(422).json({ msg: "Não foi possível encontrar esse membro"})
            }

            produto = await prisma.produto.update({ 
                where: { id: Number(id) },
                data: { 
                    quantidade_carrinho: quantidade_carrinho
                }
            });
            

            return res.status(200).json({ msg: "Carrinho atualizado com sucesso"});
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho", error);
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" });
        }
    }
}

export default Cart;