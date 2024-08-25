export class EstoqueModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async getEstoque(agrupamento = 'cliente') {
    const connection = await this.dbConnection.connect();
    let query;
    
    if (agrupamento === 'produto') {
      query = `
        SELECT 
          p.id AS produto_id, p.nome AS produto_nome, 
          c.id AS cliente_id, c.nome AS cliente_nome, 
          e.quantidade 
        FROM estoque e
        JOIN produto p ON e.produto_id = p.id
        JOIN cliente c ON e.cliente_id = c.id
        ORDER BY p.id, c.id;
      `;
    } else {
      query = `
        SELECT 
          c.id AS cliente_id, c.nome AS cliente_nome, 
          p.id AS produto_id, p.nome AS produto_nome, 
          e.quantidade 
        FROM estoque e
        JOIN cliente c ON e.cliente_id = c.id
        JOIN produto p ON e.produto_id = p.id
        ORDER BY c.id, p.id;
      `;
    }

    const [rows] = await connection.execute(query);
    return rows;
  }

  async getProdutosPorCliente(clienteId) {
    const connection = await this.dbConnection.connect();
    const [rows] = await connection.execute(`
      SELECT 
        p.id AS produto_id, p.nome AS produto_nome, 
        e.quantidade 
      FROM estoque e
      JOIN produto p ON e.produto_id = p.id
      WHERE e.cliente_id = ?
    `, [clienteId]);
    return rows;
  }

  async getClientesPorProduto(produtoId) {
    const connection = await this.dbConnection.connect();
    const [rows] = await connection.execute(`
      SELECT 
        c.id AS cliente_id, c.nome AS cliente_nome, 
        e.quantidade 
      FROM estoque e
      JOIN cliente c ON e.cliente_id = c.id
      WHERE e.produto_id = ?
    `, [produtoId]);
    return rows;
  }

  async atualizarEstoque(clienteId, produtoId, quantidade) {
    const connection = await this.dbConnection.connect();
    
    if (quantidade <= 0) {
      const [result] = await connection.execute(`
        DELETE FROM estoque
        WHERE cliente_id = ? AND produto_id = ?
      `, [clienteId, produtoId]);
      return result.affectedRows;
    } else {
      const [result] = await connection.execute(`
        INSERT INTO estoque (cliente_id, produto_id, quantidade)
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE quantidade = VALUES(quantidade)
      `, [clienteId, produtoId, quantidade]);
      return result.affectedRows;
    }
  }
}
