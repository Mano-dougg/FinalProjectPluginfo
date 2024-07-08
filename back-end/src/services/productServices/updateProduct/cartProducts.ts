import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class Cart {

     /**
     * Recebe o ID e o novo valor da quantidade carrinho e atualiza no banco
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>} 
     */
    static async updateCartProducts (req: Request, res: Response) {
        const { id } = req.params;
        const { quantidade_carrinho } = req.body

        try {
            let produto = await prisma.produto.findUnique({where: { id: Number(id) }});

            // CHECK IF PRODUCT EXISTS
            if (!produto) { return res.status(422).json({ msg: "Nenhum produto foi encontrado"}) }

            produto = await prisma.produto.update({ 
                where: { id: Number(id) },
                data: { 
                    quantidade_carrinho: quantidade_carrinho
                }
            });
            

            return res.status(200).json({ msg: "Carrinho atualizado com sucesso"});
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho", error);
            res.status(500).json({ msg: "Erro ao adicionar ao carrinho" });
        }
    }
}

export default Cart;