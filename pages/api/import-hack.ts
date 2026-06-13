// Leave the openid-client import to get nextjs to leave the library in node_modules after build
import * as dummy from 'openid-client';
import * as jose from 'jose';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const unused = await import('svix');
  const unused2 = await import('nodemailer');
  res.status(200).json({});
}
