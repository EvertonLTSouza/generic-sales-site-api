import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const produtoController = container.get('produtoController');

router.get('/produtos', produtoController.getAllProdutos.bind(produtoController));
router.get('/produtos/:id', produtoController.getProdutoById.bind(produtoController));
router.post('/produtos', produtoController.createProduto.bind(produtoController));
router.put('/produtos/:id', produtoController.updateProduto.bind(produtoController));
router.delete('/produtos/:id', produtoController.deleteProduto.bind(produtoController));
router.delete('/produtos', produtoController.deleteProdutos.bind(produtoController));

export default router;
