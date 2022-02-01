import { Request, Response } from 'express';
import { User } from '../entity/user';
import { encrypt, comparePassword } from '../utils/bcrypt';
import { createToken } from '../utils/common';


export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        if (await comparePassword(password, user.password)) {
            res.json({
                msg: "Inicio sessión correctamente",
                token: createToken(user),
            });
        } else {
            res.status(400).json({ msg: "La contraseña es incorrecta" });
        }
    } else {
        res
            .status(400)
            .json({
                mensaje: "No se ha encontrado ninguna cuenta asociada a ese usuario",
            });
    }
};

export const getinfotoken = async (req: Request, res: Response) => {
    const user = req.user;
    res.json(user);
};

export const register = async (req: Request, res: Response) => {
    try {
        const { password, username } = req.body;
        const data = { username, password: await encrypt(password) };
        const user = await User.create(data);
        const token = createToken({ ...data, id: user.id });
        return res.status(201).json({
            msg: "Usuario creado exitosamente",
            token,
        });
    } catch (error) {
        console.log(error);
    }
};

