import { ClienteService } from '../services/clienteService.js';
import { ClienteModel } from '../models/clienteModel.js';
import { ClienteController } from '../controllers/clienteController.js';

import { ProdutoService } from '../services/produtoService.js';
import { ProdutoModel } from '../models/produtoModel.js';
import { ProdutoController } from '../controllers/produtoController.js';

import { EstoqueService } from '../services/estoqueService.js';
import { EstoqueModel } from '../models/estoqueModel.js';
import { EstoqueController } from '../controllers/estoqueController.js';

import { OfertaModel } from '../models/ofertaModel.js';
import { OfertaService } from '../services/ofertaService.js';
import { OfertaController } from '../controllers/ofertaController.js';

import { TipoOfertaModel } from '../models/tipoOfertaModel.js';
import { TipoOfertaService } from '../services/tipoOfertaService.js';
import { TipoOfertaController } from '../controllers/tipoOfertaController.js';

import { TransacaoModel } from '../models/transacaoModel.js';
import { TransacaoService } from '../services/transacaoService.js';
import { TransacaoController } from '../controllers/transacaoController.js';

import connect from './db.js';

export class DIContainer {
  constructor() {
    this.dependencies = new Map();
    this.registerDependencies();
  }

  registerDependencies() {
    // Configura a conexão com o banco de dados
    this.dependencies.set('dbConnection', connect);

    // Registra o modelo, serviço e controlador de Cliente
    this.dependencies.set('clienteModel', new ClienteModel(this.get('dbConnection')));
    this.dependencies.set('clienteService', new ClienteService(this.get('clienteModel')));
    this.dependencies.set('clienteController', new ClienteController(this.get('clienteService')));

    // Registra o modelo, serviço e controlador de Produto
    this.dependencies.set('produtoModel', new ProdutoModel(this.get('dbConnection')));
    this.dependencies.set('produtoService', new ProdutoService(this.get('produtoModel')));
    this.dependencies.set('produtoController', new ProdutoController(this.get('produtoService')));

    // Registra o modelo, serviço e controlador de Estoque
    this.dependencies.set('estoqueModel', new EstoqueModel(this.get('dbConnection')));
    this.dependencies.set('estoqueService', new EstoqueService(this.get('estoqueModel')));
    this.dependencies.set('estoqueController', new EstoqueController(this.get('estoqueService')));

    // Registra o modelo, serviço e controlador de TipoOferta
    this.dependencies.set('tipoOfertaModel', new TipoOfertaModel(this.get('dbConnection')));
    this.dependencies.set('tipoOfertaService', new TipoOfertaService(this.get('tipoOfertaModel')));
    this.dependencies.set('tipoOfertaController', new TipoOfertaController(this.get('tipoOfertaService')));

    // Registra o modelo, serviço e controlador de Oferta
    this.dependencies.set('ofertaModel', new OfertaModel(this.get('dbConnection')));
    this.dependencies.set('ofertaService', new OfertaService(
                                                              this.get('ofertaModel'), 
                                                              this.get('clienteModel'), 
                                                              this.get('produtoModel'), 
                                                              this.get('tipoOfertaModel'))
                                                            );
    this.dependencies.set('ofertaController', new OfertaController(this.get('ofertaService')));

    // Registra o modelo, serviço e controlador de Transacao
    this.dependencies.set('transacaoModel', new TransacaoModel(this.get('dbConnection')));
    this.dependencies.set('transacaoService', new TransacaoService(
                                                                    this.get('transacaoModel'),
                                                                    this.get('ofertaModel'),
                                                                    this.get('estoqueModel'))
                                                                  );
    this.dependencies.set('transacaoController', new TransacaoController(this.get('transacaoService')));
  }

  get(key) {
    return this.dependencies.get(key);
  }
}

export const container = new DIContainer();
