import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const transacaoController = container.get('transacaoController');

router.get('/transacoes/cliente/:clienteId', (req, res) => transacaoController.getTransacoesByCliente(req, res));
router.post('/transacoes', (req, res) => transacaoController.processarTransacao(req, res));

export default router;
