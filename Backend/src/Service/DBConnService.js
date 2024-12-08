import mysql from "mysql2";
import { Pool } from "mysql2";

class DBConnService {

    pool;

    createDBConnection () {
        this.pool = mysql.createPool({
            user: 'root',
            host: 'localhost',
            database: 'tododb',
            password: '@Golu123',
            port: '3306',
            connectionLimit: '10'
        });
        this.pool.getConnection((error, connection)=>{
            if (error) {
                console.log(`Error connection db : ${error}`);
            } else {
                console.log("DB Connection Successful");
                connection.release();    
            }
        });
    };
};

export { DBConnService };