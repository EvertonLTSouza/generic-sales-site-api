import db from '../config/db.js';

export const criarCliente = async (cliente) => {
    const connection = await db.connect();
    const [result] = await connection.execute(
        'INSERT INTO cliente (nome, sobrenome, endereco, saldo) VALUES (?, ?, ?, ?)',
        [cliente.nome, cliente.sobrenome, cliente.endereco, cliente.saldo]
    );
    return result.insertId;
};

export const obterClientes = async () => {
    const connection = await db.connect();
    const [rows] = await connection.query('SELECT * FROM cliente');
    return rows;
};

export const obterClientePorId = async (id) => {
    const connection = await db.connect();
    const [rows] = await connection.query('SELECT * FROM cliente WHERE id = ?', [id]);
    return rows[0];
};

export const atualizarCliente = async (id, cliente) => {
    const connection = await db.connect();
    await connection.execute(
        'UPDATE cliente SET nome = ?, sobrenome = ?, endereco = ?, saldo = ? WHERE id = ?',
        [cliente.nome, cliente.sobrenome, cliente.endereco, cliente.saldo, id]
    );
};

export const deletarCliente = async (id) => {
    const connection = await db.connect();
    await connection.execute('DELETE FROM cliente WHERE id = ?', [id]);
};
