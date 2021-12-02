// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var Cookies = require('cookies')


type Data = {
  msg?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const cookies = new Cookies(req, res)
  cookies.set('userlogin', JSON.stringify(undefined))
  res.status(200).json({ msg: 'Logout' })
}
