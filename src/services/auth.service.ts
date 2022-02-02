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
        console.log(error);
        return {
            error: true,
            message: error?.message ? error?.message : 'Ha ocurrido un error'
        }
    }
}

