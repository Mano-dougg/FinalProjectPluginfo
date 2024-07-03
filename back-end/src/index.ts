import express from 'express';
import { routes } from './routes/routes';
require('dotenv').config();

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});