import { config } from 'dotenv';

config();

export const DB_NAME: any = process.env.DB_NAME;
export const DB_USERNAME: any = process.env.DB_USERNAME;
export const DB_PASSWORD: any = process.env.DB_PASSWORD;
export const DB_HOST: any = process.env.DB_HOST;
export const DB_PORT: any = process.env.DB_PORT;
export const PORT: any = process.env.PORT || 3000;
export const JWT_KEY: any = process.env.JWT_KEY;


