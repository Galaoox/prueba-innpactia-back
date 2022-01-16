import { createConnection } from 'typeorm';
import { Users } from './entity/users';
import './config';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } from './config';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: DB_PORT,
        host: DB_HOST,
        database: DB_NAME,
        entities: [Users],
        synchronize: true,
        ssl: false
    })
}