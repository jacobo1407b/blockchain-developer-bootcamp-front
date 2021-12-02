import nextConnect from 'next-connect';
import { create, Options } from 'ipfs-http-client';
const BufferList = require('bl/BufferList')

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
    const content = new BufferList()
    var out = []
    for await (const chunk of fl) {
        //content.append(chunk)
        out.push(chunk) 
    }
    console.log(out)
    res.status(200).json({ data: 'success' });
});

export default apiRoute;
