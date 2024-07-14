import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class GetProducts {

    /**
     * Retorna uma lista com todos os produtos
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>} 
     */
    static async getAll(req: Request, res: Response) {
        try {
            const produtos = await prisma.produto.findMany({
                include: {
                    imagePath: true,
                },
            });

            // CHECK IF PRODUCT EXISTS
            if (!produtos) { return res.status(404).json({ msg: "Nenhum produto encontrado" }) };

            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    };

    /**
     * Recebe o ID e retorna o produto correspondente
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     */
    static async byId(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const produto = await prisma.produto.findUnique({
                where: { id: Number(id) },
                include: { imagePath: true }
            });

            // CHECK IF PRODUCT EXISTS
            if (!produto) { return res.status(404).json({ msg: "Produto não encontrado" }) };

            return res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    };

    /**
     * Recebe o nome e retorna o produto correspondente
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     */
    static async byName(req: Request, res: Response) {
        const { nomeProduto } = req.params;

        try {
            const produto = await prisma.produto.findUnique({
                where: { nome: nomeProduto },
                include: { imagePath: true }
            });

            // CHECK IF PRODUCT EXISTS
            if (!produto) { return res.status(404).json({ msg: "Produto não encontrado" }) };

            return res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    };

    /**
     * Recebe uma sequência de letras e retorna os produtos correspondentes
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     */
    static async byLetters(req: Request, res: Response) {
        const { lettersProduto } = req.params;

        try {
            const produtos = await prisma.produto.findMany({
                where: { nome: { startsWith: lettersProduto } },
                include: { imagePath: true }
            });

            // CHECK IF PRODUCT EXISTS
            if (!produtos) { return res.status(404).json({ msg: "Nenhum produto encontrado" }); }

            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    };

    /**
     * Retorna uma lista com todos os produtos com a quantidade carrinho maior que 0
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>} 
     */
    static async cartProducts (req: Request, res: Response) {
        try {
            const produtos = await prisma.produto.findMany({
                where: {
                    quantidade_carrinho: {
                        gt: 0
                    }
                },
                include: { imagePath: true }
            });

            // CHECK IF PRODUCT EXISTS
            if (!produtos) { return res.status(404).json({ msg: "Nenhum produto encontrado" }); }

            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos:" });
        }
    };

     /**
     * Filtra produtos com base nos parâmetros de consulta fornecidos
     * @param {Request} req - Objeto de solicitação do Express
     * @param {Response} res - Objeto de resposta do Express
     * @returns {Promise<void>}
     */
    static async filteredProducts (req: Request, res: Response) {
        
        try {
            const {
                marca, preco_min, preco_max, promocao_min, promocao_max, 
                face, labios, olhos, kits, sombrancelha, unhas, original
            } = req.query;

            // // Filtrar apenas os campos que estão presentes no req.query
            const filters: any = {};
            if (marca) filters.marca = { contains: String(marca), mode: 'insensitive' };
            if (preco_min) filters.preco = { ...filters.preco, gte: Number(preco_min) };
            if (preco_max) filters.preco = { ...filters.preco, lte: Number(preco_max) };
            if (promocao_min) filters.promocao = { ...filters.promocao, gte: Number(promocao_min) };
            if (promocao_max) filters.promocao = { ...filters.promocao, lte: Number(promocao_max) };
            if (face) filters.face = Boolean(face);
            if (labios) filters.labios = Boolean(labios);
            if (olhos) filters.olhos = Boolean(olhos);
            if (kits) filters.kits = Boolean(kits);
            if (sombrancelha) filters.sombrancelha = Boolean(sombrancelha);
            if (unhas) filters.unhas = Boolean(unhas);
            if (original) filters.unhas = Boolean(original);

            const produtos = await prisma.produto.findMany({
                where: filters,
                include: { imagePath: true }
            });

            res.status(200).json(produtos);
        }
        catch (error) {
            res.status(500).json({ msg: "Erro ao buscar produtos" });
        }
    };

}

export default GetProducts;