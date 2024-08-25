import express from 'express';
import clientRoutes from './routes/clienteRoutes.js';
import produtosRoutes from './routes/produtoRoutes.js'
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', clientRoutes);
app.use('/api', produtosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});