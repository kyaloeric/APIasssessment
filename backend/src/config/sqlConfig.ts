import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();
export const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: "localhost",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function testConnection() {
  // console.log(sqlConfig);

  const pool = await mssql.connect(sqlConfig);
  //testing if db is connected
  if (pool.connected) {
    console.log("connected to database");
  } else {
    console.log("connection failed");
  }
}

