import { createConnection } from 'typeorm';
import './env';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } from './env';
import { User } from '../entity/user';
import { Repair } from '../entity/repair';
import { Phone } from '../entity/phone';
import { Customer } from '../entity/customer';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: DB_PORT,
        host: DB_HOST,
        database: DB_NAME,
        entities: [User, Customer, Phone, Repair],
        synchronize: true,
        ssl: false
    })
}