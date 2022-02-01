import { Request, Response } from 'express';
import { User } from '../entity/user';
import { encrypt, comparePassword } from '../utils/bcrypt';
import { createToken } from '../utils/common';
import { loginUser, registerUser } from '../services/auth.service';


export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const result = await loginUser({ username, password });
    return res.status(result.error ? 400 : 200).json(result);
};

export const getinfotoken = async (req: Request, res: Response) => {
    const user = req.user;
    res.json(user);
};

export const register = async (req: Request, res: Response) => {
    const { password, username } = req.body;
    const result = await registerUser({ username, password });
    return res.status(result.error ? 400 : 200).json(result);
};




