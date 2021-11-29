import nextConnect from 'next-connect';
import { create, Options } from 'ipfs-http-client';

var opt: Options = {
    url: process.env.IPFS_URL
}
const ipfs = create(opt);

const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res: any) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

// Process a POST request

apiRoute.post(async (req: any, res: any) => {
    const fl = await ipfs.get(req.body.cid)
    console.log(fl)
    res.status(200).json({ data: 'success' });
});

export default apiRoute;
