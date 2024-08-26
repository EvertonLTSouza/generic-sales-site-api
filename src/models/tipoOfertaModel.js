export class TipoOfertaModel {
    constructor(dbConnection) {
      this.dbConnection = dbConnection;
    }
  
    async getTipoOfertaById(id) {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute(
        'SELECT * FROM tipo_oferta WHERE id = ?',
        [id]
      );
      return rows[0];
    }

    async getAllTiposOferta() {
      const connection = await this.dbConnection.connect();
      const [rows] = await connection.execute(`
        SELECT * FROM tipo_oferta
      `);
      return rows;
    }
  }
  