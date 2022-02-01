import { IUser } from '../interface/IUser';
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/env';
import { Response } from 'express';

export const createToken = (user: IUser) => {
    return jwt.sign({ id: user.id, username: user.username }, JWT_KEY, {
        expiresIn: '1h'
    });
}

export const validateResult = (result: any, res: Response) => {
    return res.status(result.error ? 400 : 200).json(result);
}

export const calcPagination = (total: number, limit: number, page: number) => {
    const maxPage = Math.ceil(total / limit);
    const next = page + 1 > maxPage ? page : page + 1;
    return {
        total,
        limit,
        page,
        maxPage,
        next
    }
}