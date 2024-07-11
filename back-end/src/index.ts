import { app } from './app'
require('dotenv').config();

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`);
});