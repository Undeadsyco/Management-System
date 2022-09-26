import { NextApiRequest, NextApiResponse } from 'next';

import connectToDb from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDb();
  console.log('data', db);
  if (db) res.json({ status: 'successful' });
  else res.json({ status: 'failed' })
}
