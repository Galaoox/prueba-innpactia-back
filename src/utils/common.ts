import { IUser } from '../interface/IUser';
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/env';

export const createToken = (user: IUser) => {
    return jwt.sign({ id: user.id, username: user.username }, JWT_KEY);
}