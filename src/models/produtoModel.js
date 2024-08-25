export class ProdutoModel {
    constructor(dbConnection) {
      this.dbConnection = dbConnection;
    }
  
    async getAllProdutos() {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute('SELECT * FROM produto');
      return rows;
    }
  
    async getProdutoById(id) {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute('SELECT * FROM produto WHERE id = ?', [id]);
      return rows[0];
    }
  
    async createProduto(produtoData) {
      const { nome, descricao } = produtoData;
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(
          'INSERT INTO produto (nome, descricao) VALUES (?, ?)',
          [nome, descricao]
      );
      return result.insertId;
    }
  
    async updateProduto(id, produtoData) {
      const { nome, descricao } = produtoData;
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(
          'UPDATE produto SET nome = ?, descricao = ? WHERE id = ?',
          [nome, descricao, id]
      );
      return result.affectedRows;
    }
  
    async deleteProduto(id) {
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute('DELETE FROM produto WHERE id = ?', [id]);
      return result.affectedRows;
    }
  
    async deleteProdutos(ids) {
      const connection = await this.dbConnection.connect();
      const [result] = await connection.execute(
          `DELETE FROM produto WHERE id IN (${ids.map(() => '?').join(', ')})`,
          ids
      );
      return result.affectedRows;
    }
  }
  