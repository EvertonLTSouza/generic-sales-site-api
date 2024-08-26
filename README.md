# API de Gerenciamento de Site Genérico

Este é o README da API de Gerenciamento de Site Genérico. A API fornece funcionalidades para gerenciar clientes, produtos, estoque, ofertas, transações e tipos de oferta.

## Endpoints

### Cliente

- **GET /api/clientes**: Obtém todos os clientes.
- **GET /api/clientes/:id**: Obtém um cliente específico pelo ID.
- **POST /api/clientes**: Adiciona um novo cliente.
  - Body: `{ "nome": "string", "sobrenome": "string", "endereco": "string", "saldo": "double" }`
- **PUT /api/clientes/:id**: Atualiza os dados de um cliente pelo ID.
  - Body: `{ "nome": "string", "sobrenome": "string", "endereco": "string", "saldo": "double" }`
- **DELETE /api/clientes/:id**: Deleta um cliente pelo ID.

### Produto

- **GET /api/produtos**: Obtém todos os produtos.
- **GET /api/produtos/:id**: Obtém um produto específico pelo ID.
- **POST /api/produtos**: Adiciona um novo produto.
  - Body: `{ "nome": "string", "descricao": "string" }`
- **PUT /api/produtos/:id**: Atualiza os dados de um produto pelo ID.
  - Body: `{ "nome": "string", "descricao": "string" }`
- **DELETE /api/produtos/:id**: Deleta um produto pelo ID.

### Estoque

- **GET /api/estoque**: Obtém o estoque agrupado por cliente ou produto.
  - Query Parameters (opcional): `agrupadoPor=cliente|produto`
- **GET /api/estoque/cliente/:clienteId**: Obtém a lista de produtos que um cliente possui em estoque.
- **GET /api/estoque/produto/:produtoId**: Obtém a lista de clientes que possuem um produto específico em estoque.
- **POST /api/estoque**: Adiciona um novo produto ao estoque de um cliente.
  - Body: `{ "clienteId": "string", "produtoId": "string", "quantidade": "int" }`
- **PUT /api/estoque**: Atualiza a quantidade de um produto no estoque de um cliente.
  - Body: `{ "clienteId": "string", "produtoId": "string", "quantidade": "int" }`
- **DELETE /api/estoque**: Remove um produto do estoque de um cliente.
  - Body: `{ "clienteId": "string", "produtoId": "string" }`

### Oferta

- **GET /api/ofertas**: Obtém todas as ofertas, ou filtradas por cliente, produto, ou ambos.
  - Query Parameters (opcional): `clienteId=string&produtoId=string`
- **POST /api/ofertas**: Adiciona uma nova oferta.
  - Body: `{ "idCliente": "string", "idProduto": "string", "idTipoOferta": "int", "quantidade": "int", "valorUnitario": "double" }`
- **DELETE /api/ofertas/:id**: Cancela uma oferta pelo ID.

### Transação

- **GET /api/transacoes**: Obtém todas as transações.
- **GET /api/transacoes/:id**: Obtém uma transação específica pelo ID.
- **POST /api/transacoes**: Adiciona uma nova transação.
  - Body: `{ "vendedorId": "string", "compradorId": "string", "produtoId": "string", "quantidade": "int", "valorUnitario": "double" }`
- **DELETE /api/transacoes/:id**: Deleta uma transação pelo ID.

### Tipo de Oferta

- **GET /api/tipos-oferta**: Obtém todos os tipos de oferta disponíveis.

## Como Executar

1. Clone o repositório para sua máquina local.
2. Instale as dependências usando `npm install`.
3. Configure o arquivo `.env` com suas credenciais de banco de dados.
4. Execute o servidor usando `npm start`.

## Contribuição

Sinta-se à vontade para contribuir para este projeto enviando pull requests ou reportando issues.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
