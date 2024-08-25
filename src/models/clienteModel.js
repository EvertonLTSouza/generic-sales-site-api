export class ClienteModel{
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    criarCliente = async (cliente) => {
        const connection = await this.dbConnection.connect();
        const [result] = await connection.execute(
            'INSERT INTO cliente (nome, sobrenome, endereco, saldo) VALUES (?, ?, ?, ?)',
            [cliente.nome, cliente.sobrenome, cliente.endereco, cliente.saldo]
        );
        return result.insertId;
    };
    
    obterClientes = async () => {
        const connection = await this.dbConnection.connect();
        const [rows] = await connection.query('SELECT * FROM cliente');
        return rows;
    };
    
    obterClientePorId = async (id) => {
        const connection = await this.dbConnection.connect();
        const [rows] = await connection.query('SELECT * FROM cliente WHERE id = ?', [id]);
        return rows[0];
    };
    
    atualizarCliente = async (id, cliente) => {
        const connection = await this.dbConnection.connect();
        await connection.execute(
            'UPDATE cliente SET nome = ?, sobrenome = ?, endereco = ?, saldo = ? WHERE id = ?',
            [cliente.nome, cliente.sobrenome, cliente.endereco, cliente.saldo, id]
        );
    };
    
    deletarCliente = async (id) => {
        const connection = await this.dbConnection.connect();
        await connection.execute('DELETE FROM cliente WHERE id = ?', [id]);
    };
}
