import type { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/User';
import connectDB from 'utils/db';
import {hashPassword} from 'utils';

type Data = {
    error?: string;
    message?: string;
    id?: string;
}
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        address: string;
        name: string;
        username: string;
        password: string;
    };
}


async function handler(req: ExtendedNextApiRequest,res: NextApiResponse<Data>) {
    const { address, name, username, password } = req.body;
    const isuser = await User.findOne({ address });
    if(isuser) {
        res.status(400).json({error: 'User already exists'})
    }else{
        const hashedPassword = await hashPassword(password);
        const user = new User({
            address,
            name,
            password: hashedPassword,
            username,
            logo:'',
            nameimg:'',
        });
        const register = await user.save();
        res.status(200).json({message: 'User created', id: register._id});
    }
}
export default connectDB(handler);
