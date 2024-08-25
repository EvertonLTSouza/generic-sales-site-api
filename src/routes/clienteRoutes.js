import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const clienteController = container.get('clienteController');

router.post('/clientes/', clienteController.criarCliente);
router.get('/clientes/', clienteController.obterClientes);
router.get('/clientes/:id', clienteController.obterClientePorId);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);

export default router;
