import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import User from "../../../entities/user";

const prisma = new PrismaClient()


class Register {
    static async registerUser(req: Request , res: Response) {
        try {
            const { nome, email, senha } = req.body

            let user = await prisma.user.findUnique({ where: {email}});
            
            const validation = this.validationRegister(user, nome, email, senha, res)

            if(validation) { return }

            // CREATE PASSWORD WITH HASH
            const salt = await bcrypt.genSalt(12)
            const senhaHash = await bcrypt.hash(senha, salt)

            // CREATE USER
            user = await prisma.user.create({
                data: {
                    nome, 
                    email, 
                    senha: senhaHash, 
                },
            })

            return res.status(201).json({ msg: "Usúario criado com sucesso"})
        }
        catch (error) {
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    };

    static validationRegister(user: User, nome: string, email: string, senha: string, res: Response) {

        if (user) {
            res.status(422).json({ error: "Já existe um usuário com este email" });
            return true;
        }

        if (!nome) {
            res.status(422).json({ error: "Nome é obrigatório" });
            return true;
        }

        if (!email) {
            res.status(422).json({ error: "Email é obrigatório" });
            return true;
        }

        if (!senha) {
            res.status(422).json({ error: "Senha é obrigatória" });
            return true;
        }

        return false;

    }

}


export default Register;
