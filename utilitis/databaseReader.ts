
import mysql from 'mysql2/promise';

const dbConfig = {
  host: '127.0.0.1',      
  user: 'root',           
  password: 'root', 
  database: 'QAdb'  
};

export async function fetchEcomDataBase() {
  const connection = await mysql.createConnection(dbConfig);

  const [rows] = await connection.execute('SELECT username, password, productname from eComApp;');
  
  await connection.end();
  
  return rows as {username: string, password: string, productname: string}[];
}
