import nextConnect from 'next-connect';
import multer from 'multer';
import { create, Options } from 'ipfs-http-client';

var opt: Options = {
    url: process.env.IPFS_URL
}
const ipfs = create(opt);
const upload = multer();
var middleware = upload.single('file')
const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res: any) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

// Process a POST request
apiRoute.use(middleware)
apiRoute.post(async (req: any, res: any) => {
    var file = {
        path: req.file.originalname,
        content: req.file.buffer
    }
    var uploadfile = await ipfs.add(file);
    res.status(200).json({ data: 'success',cid:uploadfile.cid.toString() });
});

export default apiRoute;
export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};