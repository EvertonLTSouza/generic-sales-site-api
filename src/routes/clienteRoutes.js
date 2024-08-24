import express from 'express';
import * as ClienteController from '../controllers/clienteController.js';

const router = express.Router();

router.post('/', ClienteController.criarCliente);
router.get('/', ClienteController.obterClientes);
router.get('/:id', ClienteController.obterClientePorId);
router.put('/:id', ClienteController.atualizarCliente);
router.delete('/:id', ClienteController.deletarCliente);

export default router;
