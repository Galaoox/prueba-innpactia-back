import { calcPagination } from '../utils/common';
import { User } from '../entity/user';
import { Not } from 'typeorm';
import { IUser } from '../interface/IUser';
import { encrypt } from '../utils/bcrypt';


export const getListUsers = async (options: { limit: string, page: string, userId: string }) => {
    try {
        const [results, total] = await User.findAndCount({
            take: Number(options.limit),
            skip: (Number(options.page) - 1) * Number(options.limit),
            where: {
                id: Not(options.userId)
            }
        })

        return {
            data: results,
            info: calcPagination(total, Number(options.limit), Number(options.page))
        }
    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: 'Ha ocurrido un error'
        }
    }
}

export const createUser = async (data: IUser) => {
    try {
        const usernameExist = await User.findOne({ username: data.username });
        if (usernameExist) throw new Error("El usuario ya se encuentra en uso");
        data.password = await encrypt(data.password);
        await User.create(data).save();
        return {
            error: false,
            message: "Registrado exitosamente"
        }
    } catch (error: any) {
        console.log(error);
        return {
            error: true,
            message: 'Ha ocurrido un error'
        }
    }
}

export const deleteUser = async (id: number) => {
    try {

        const user = await User.findOne(id);
        if (user) await User.softRemove(user);
        return {
            error: false
        }
    } catch (error: any) {
        console.log(error);
        return {
            error: true,
            message: 'Ha ocurrido un error'
        }
    }
}

