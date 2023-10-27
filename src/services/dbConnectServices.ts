import { dbConfig } from "../config/db";
import sql from 'mssql';


export async function dbConnectService(){
            try {
                 let pool = await new sql.ConnectionPool(dbConfig);
                  return pool; 
            } catch (error) {
                  console.log(error)
            }

}