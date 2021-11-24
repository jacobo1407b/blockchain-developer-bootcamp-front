import bcrypt from 'bcryptjs';

export const routes = {
    login: "/",
    perfil: "/perfil",
    home: "/home",
    propiedad: "/propiedades"
}

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(15);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    const result = await bcrypt.compare(password, hash);
    return result;
}