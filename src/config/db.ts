import * as dotenv from 'dotenv';

dotenv.config();

export const dbConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool:{
          max: 10,
          min: 1,
          idleTimeoutMillis: 30000
    },
    options:{
          encrypt: false,
          trustCertificate: true
    }
}