import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class FilterProducts {

    static async getFilteredProducts (req: Request, res: Response) {
        
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
            console.error("Erro ao buscar produtos:", error);
            res.status(500).json({ msg: "Erro ao buscar produtos" });
        }
    }
}

export default FilterProducts;