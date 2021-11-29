import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies'
import User from 'models/User';
import {comparePassword} from 'utils';

type Data = {
    error?: boolean;
    message?: string;
}
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        address: string;
        password: string;
    };
}

export default async function handler(req: ExtendedNextApiRequest,res: NextApiResponse<Data>) {
    const cookies = new Cookies(req, res)
    const { address, password } = req.body;
    const user = await User.findOne({ address });
    if(!user){
        res.status(401).json({message:'Usuario no encontrado',error:true})
    }else{
        if(await comparePassword(password,user.password)){
            user.password = "";
            delete user.password;
            cookies.set('userlogin', JSON.stringify(user))
            res.status(200).json({message:'Login success',error:false})
        }else{
            res.status(401).json({message:'Password no correcto',error:true})
        }
    }
}