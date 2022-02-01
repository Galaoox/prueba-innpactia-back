import { IPhone } from './IPhone';
export interface IRepair {
    id: number;
    description: string;
    phone: IPhone;
    created_at: Date;
    updated_at: Date;
    deletedDate: Date;
    phoneId: number;
}