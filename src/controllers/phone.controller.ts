import { Request, Response } from 'express';
import { validateResult } from '../utils/common';
import { createPhone, getListPhones, getPhone, deletePhone, updatePhone } from '../services/phone.service';
import { IPhone } from '../interface/IPhone';


export const create = async (req: Request, res: Response) => {

    try {
        const phone: IPhone = {
            description: req.body.description,
            customerId: req.body.customerId,
            model: req.body.model
        }
        const result = await createPhone(phone);
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};

export const getList = async (req: Request, res: Response) => {

    try {
        const options = { limit: Number(req.query.limit), page: Number(req.query.page), customerId: Number(req.query.customerId) };
        const result = await getListPhones(options);
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};


export const getOne = async (req: Request, res: Response) => {

    try {
        const result = await getPhone(Number(req.params.id));
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};

export const remove = async (req: Request, res: Response) => {

    try {
        const result = await deletePhone(Number(req.params.id));
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};

export const update = async (req: Request, res: Response) => {

    try {
        const phone: IPhone = {
            description: req.body.description,
            model: req.body.model
        }
        const result = await updatePhone(phone, Number(req.params.id));
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};