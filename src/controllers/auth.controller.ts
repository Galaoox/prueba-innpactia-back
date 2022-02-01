import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/auth.service';
import { validateResult } from '../utils/common';


export const login = async (req: Request, res: Response) => {

    try {
        const { username, password } = req.body;
        const result = await loginUser({ username, password });
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};

export const getinfotoken = async (req: any, res: Response) => {
    try {
        const user = req.user;
        return res.json(user);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { password, username } = req.body;
        const result = await registerUser({ username, password });
        return validateResult(result, res);
    } catch (error: any) {
        return res.status(400).json({
            message: error.message,
            error: true
        });
    }
};




