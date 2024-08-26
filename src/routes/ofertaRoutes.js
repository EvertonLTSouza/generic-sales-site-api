import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const ofertaController = container.get('ofertaController');

router.get('/ofertas', (req, res) => ofertaController.getOfertas(req, res));
router.post('/ofertas', (req, res) => ofertaController.createOferta(req, res));
router.delete('/ofertas/:id_cliente/:id_produto', (req, res) => ofertaController.deleteOferta(req, res));

export default router
