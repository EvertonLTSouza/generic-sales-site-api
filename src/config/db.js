import mysql from 'mysql2/promise';

const connect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        })

        console.log('Conectado ao banco de dados mySQL');
        return connection;

    } catch (error) {
        console.log('Falha na conexão com o banco de dados:', error.message);
        process.exit(1);
    }
}

export default { connect };