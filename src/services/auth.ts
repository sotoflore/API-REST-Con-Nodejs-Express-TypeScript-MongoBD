import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "Existe el usuario";

    const passHash = await encrypt(password);

    const registerNewUser = await UserModel.create({ email, password: passHash, name });
    return registerNewUser;
};

const loginUser = async ({email, password}: Auth) => { 
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "No existe el usuario";

    const passwordHash = checkIs.password; // el password encriptado de la base de datos
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return 'PASSWORD_INCORRECT';

    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    }

    return data;
};

export { registerNewUser, loginUser };