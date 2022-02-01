import { IPhone } from './IPhone';
export interface ICustomer {
    id?: number;
    name: string;
    lastname: string;
    phones?: IPhone[];
    created_at?: Date;
    updated_at?: Date;
    deletedData?: Date;
}