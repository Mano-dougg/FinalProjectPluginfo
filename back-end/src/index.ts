import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json(' Hello world :) ');
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});