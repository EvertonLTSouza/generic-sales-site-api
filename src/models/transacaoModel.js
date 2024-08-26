export class TransacaoModel {
    constructor(dbConnection) {
      this.dbConnection = dbConnection;
    }
  
    async getTransacoesByCliente(clienteId) {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute(`
        SELECT t.*, 
               CASE 
                 WHEN t.vendedor_id = ? THEN 'VENDA'
                 WHEN t.comprador_id = ? THEN 'COMPRA'
               END AS tipo_transacao
        FROM transacao t
        WHERE t.vendedor_id = ? OR t.comprador_id = ?;
      `, [clienteId, clienteId, clienteId, clienteId]);
      return rows;
    }
  
    async createTransacao(vendedorId, compradorId, produtoId, quantidade, valorUnitario) {
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(`
        INSERT INTO transacao (vendedor_id, comprador_id, produto_id, quantidade, valor_unitario, data_hora_realizacao)
        VALUES (?, ?, ?, ?, ?, NOW());
      `, [vendedorId, compradorId, produtoId, quantidade, valorUnitario]);
      return result.insertId;
    }  
  }
  