export class OfertaModel {
    constructor(dbConnection) {
      this.dbConnection = dbConnection;
    }
  
    async getOfertas(filtro = {}) {
      const connection = await this.dbConnection.connect();
      let query = `
        SELECT 
            o.*, 
            c.nome AS nome_cliente, 
            p.nome AS nome_produto, 
            t.descricao AS descricao_tipo_oferta
        FROM oferta o
        JOIN cliente c ON o.id_cliente = c.id
        JOIN produto p ON o.id_produto = p.id
        JOIN tipo_oferta t ON o.id_tipo_oferta = t.id
        WHERE 1=1;
      `;
      const params = [];
  
      if (filtro.clienteId) {
        query += " AND o.id_cliente = ?";
        params.push(filtro.clienteId);
      }
  
      if (filtro.produtoId) {
        query += " AND o.id_produto = ?";
        params.push(filtro.produtoId);
      }
  
      const [rows] = await connection.execute(query, params);
      return rows;
    }
  
    async createOferta(ofertaData) {
      const { id_cliente, id_produto, id_tipo_oferta, quantidade, valor_unitario } = ofertaData;
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(
        'INSERT INTO oferta (id_cliente, id_produto, id_tipo_oferta, quantidade, valor_unitario) VALUES (?, ?, ?, ?, ?)',
        [id_cliente, id_produto, id_tipo_oferta, quantidade, valor_unitario]
      );
      return result.insertId;
    }
  
    async deleteOferta(id_cliente, id_produto) {
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(
        'DELETE FROM oferta WHERE id_cliente = ? AND id_produto = ?',
        [id_cliente, id_produto]
      );
      return result.affectedRows;
    }
  
    async ofertaExists(id_cliente, id_produto) {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute(
        'SELECT * FROM oferta WHERE id_cliente = ? AND id_produto = ?',
        [id_cliente, id_produto]
      );
      return rows.length > 0;
    }
  }
  