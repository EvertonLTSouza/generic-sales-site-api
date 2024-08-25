import { ClienteService } from '../services/clienteService.js';
import { ClienteModel } from '../models/clienteModel.js';
import { ClienteController } from '../controllers/clienteController.js';

import { ProdutoService } from '../services/produtoService.js';
import { ProdutoModel } from '../models/produtoModel.js';
import { ProdutoController } from '../controllers/produtoController.js';

import connect from './db.js';

export class DIContainer {
  constructor() {
    this.dependencies = new Map();
    this.registerDependencies();
  }

  registerDependencies() {
    // Configura a conexão com o banco de dados
    this.dependencies.set('dbConnection', connect);
    
    // Registra o modelo e serviço de Cliente
    this.dependencies.set('clienteModel', new ClienteModel(this.get('dbConnection')));
    this.dependencies.set('clienteService', new ClienteService(this.get('clienteModel')));
    this.dependencies.set('clienteController', new ClienteController(this.get('clienteService')));

    // Registra o modelo e serviço de Produto
    this.dependencies.set('produtoModel', new ProdutoModel(this.get('dbConnection')));
    this.dependencies.set('produtoService', new ProdutoService(this.get('produtoModel')));
    this.dependencies.set('produtoController', new ProdutoController(this.get('produtoService')));
  }

  get(key) {
    return this.dependencies.get(key);
  }
}

export const container = new DIContainer();
