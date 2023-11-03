import { dbConfig } from "../config/db";
import * as sql from "mssql";
import dotenv from "dotenv";


dotenv.config();

const pool = new sql.ConnectionPool(dbConfig);
// console.log(pool);

const poolConnect = pool.connect();

export async function query(queryString: string): Promise<sql.IResult<any>> {
  await poolConnect;

  try {
    const request = new sql.Request(pool);
    const result = await request.query(queryString);
    return result;
  } catch (error) {
    throw new Error(`Error executing SQL query: ${error}`);
  }
}