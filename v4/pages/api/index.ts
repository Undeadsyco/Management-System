import { NextApiRequest, NextApiResponse } from 'next';

import connectToDb from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDb();
  if (db) res.json({ status: 'successful', data: db });
  else res.json({ status: 'failed' })
}
