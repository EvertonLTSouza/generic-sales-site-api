import express from 'express';
import clientRoutes from './routes/clienteRoutes.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/clientes', clientRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});