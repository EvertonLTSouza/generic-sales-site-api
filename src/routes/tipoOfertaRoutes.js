import express from 'express';
import { container } from '../config/di-container.js';

const router = express.Router();
const tipoOfertaController = container.get('tipoOfertaController');

router.get('/tipos-oferta', (req, res) => tipoOfertaController.getTiposOferta(req, res));

export default router;
