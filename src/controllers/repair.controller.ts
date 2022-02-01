import { Request, Response } from 'express';
import { validateResult } from '../utils/common';
import { IRepair } from '../interface/IRepair';
import { createRepair, getListRepairs, getRepair, deleteRepair, updateRepair } from '../services/repair.service';


export const create = async (req: Request, res: Response) => {
    try {
        const phone: IRepair = {
            description: req.body.description,
            phoneId: req.body.phoneId,
        }
        console.log(phone);
        const result = await createRepair(phone);
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
        const options = { limit: Number(req.query.limit), page: Number(req.query.page), phoneId: Number(req.query.phoneId) };
        const result = await getListRepairs(options);
        return validateResult(result, res);
    } catch (error) {
        console.log(error);
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const result = await getRepair(Number(req.params.id));
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
        const result = await deleteRepair(Number(req.params.id));
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
        const repair: IRepair = {
            description: req.body.description,
        }
        const result = await updateRepair(repair, Number(req.params.id));
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};