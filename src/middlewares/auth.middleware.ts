import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/env';


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({
            message: "A token is required for authentication",
            error: true
        });
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], JWT_KEY);
        req.user = decoded;
    } catch (err) {
        console.log(err);

        return res.status(401).send("Invalid Token");
    }
    return next();
};