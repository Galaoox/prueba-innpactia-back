import { User } from '../entity/user';
import { comparePassword, encrypt } from '../utils/bcrypt';
import { createToken } from '../utils/common';

export const loginUser = async ({ username, password }: { username: string; password: string }) => {
    try {
        const user = await User.findOne({ username });


        if (!user) throw new Error("No se ha encontrado ninguna cuenta asociada a ese usuario");

        const passwordValid = await comparePassword(password, user.password);
        if (!passwordValid) throw new Error("La contraseña es incorrecta");
        return {
            error: false,
            token: createToken(user),
            message: "Inicio sesion exitosamente"
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const registerUser = async ({ username, password }: { username: string; password: string }) => {
    try {
        const data = { username, password: await encrypt(password) };
        const usernameExist = await User.findOne({ username });
        if (usernameExist) throw new Error("El usuario ya se encuentra en uso");
        const user = await User.create(data);
        await user.save();
        const token = createToken({ ...data, id: user.id });
        return {
            token,
            error: false,
            message: "Registrado exitosamente"
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }

}
