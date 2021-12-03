import type { NextApiRequest, NextApiResponse } from 'next';
import User from 'models/User';;
import connectDB from 'utils/db';


type Data = {
    error?: string;
    message?: string;
    id?: string;
}



async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    User.deleteMany({}, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Successfully deleted all users' });
        }
    }
    );
}

export default connectDB(handler);