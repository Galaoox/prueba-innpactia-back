import { ICustomer } from './iCustomer';
import { IRepair } from './IRepair';
export interface IPhone {
    id?: number;
    model: string;
    description: string;
    customer?: ICustomer;
    repairs?: IRepair[];
    created_at?: Date;
    updated_at?: Date;
    deletedDate?: Date;
    customerId: number;
}