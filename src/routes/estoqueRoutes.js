import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const estoqueController = container.get('estoqueController');

router.get('/estoque', estoqueController.getEstoque.bind(estoqueController));
router.get('/estoque/clientes/:clienteId/produtos', estoqueController.getProdutosPorCliente.bind(estoqueController));
router.get('/estoque/produtos/:produtoId/clientes', estoqueController.getClientesPorProduto.bind(estoqueController));
router.post('/estoque', estoqueController.atualizarEstoque.bind(estoqueController));

export default router;
