import { Request, Response } from 'express';
import { validateResult } from '../utils/common';
import { IUser } from '../interface/IUser';
import { createUser, deleteUser, getListUsers } from '../services/user.service';


export const create = async (req: Request, res: Response) => {

    try {
        const user: IUser = {
            username: req.body.username,
            password: req.body.password,
        }
        const result = await createUser(user);
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
        const options: any = {
            limit: String(req.query.limit),
            page: String(req.query.page),
            id: (req as any)?.user?.id ? (req as any)?.user?.id : ''
        };
        const result = await getListUsers(options);
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
        const result = await deleteUser(Number(req.params.id));
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};
