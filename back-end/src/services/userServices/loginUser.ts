import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import User from "../../../entities/user";

const prisma = new PrismaClient()

class Login {
    static async loginUser(req: Request , res: Response) {
        try {
            const { email, senha } = req.body
                
            let user = await prisma.user.findUnique({where: {email}});
            
            if (!user) {
                res.status(404).json({ msg: "Email ou senha inválidos" });
            }

            const validation = this.validationLogin(email, senha, res)

            if (validation) { return }
            
            await this.checkPassword(senha, user, res)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde"})
        }
    }

    static validationLogin(email: string, senha: string, res:Response) {

        if (!email) {
            res.status(422).json({ msg: "Email é obrigatório" });
            return true;
        }

        if (!senha) {
            res.status(422).json({ msg: "Senha é obrigatória" });
            return true;
        }

        return false;
    }

    static async checkPassword(senha: string, user: User, res: Response) {
     
        const checkSenha = await bcrypt.compare(senha, user.senha)
   
        if (!checkSenha) {return res.status(422).json({ error: "Email ou senha inválidos" })}
            
        return res.status(201).json({ msg: "Autenticação realizada com sucesso" })
   }
   
}

export default Login;

