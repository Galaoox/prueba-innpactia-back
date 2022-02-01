import { Request, Response } from 'express';
import { validateResult } from '../utils/common';
import { ICustomer } from '../interface/iCustomer';
import { createCustomer, getListCustomers, getCustomer, deleteCustomer, updateCustomer } from '../services/customer.service';


export const create = async (req: Request, res: Response) => {
    const customer: ICustomer = {
        name: req.body.name,
        lastname: req.body.lastname,
        numberPhone: req.body.numberPhone,
        address: req.body.address,
    }
    const result = await createCustomer(customer);
    return validateResult(result, res);
};

export const getList = async (req: Request, res: Response) => {
    const options = { limit: String(req.query.limit), page: String(req.query.page) };
    const result = await getListCustomers(options);
    return validateResult(result, res);
};


export const getOne = async (req: Request, res: Response) => {
    const result = await getCustomer(Number(req.params.id));
    return validateResult(result, res);
};

export const remove = async (req: Request, res: Response) => {
    const result = await deleteCustomer(Number(req.params.id));
    return validateResult(result, res);
};

export const update = async (req: Request, res: Response) => {
    const customer: ICustomer = {
        name: req.body.name,
        lastname: req.body.lastname,
        numberPhone: req.body.numberPhone,
        address: req.body.address,
    }
    const result = await updateCustomer(customer, Number(req.params.id));
    return validateResult(result, res);
};