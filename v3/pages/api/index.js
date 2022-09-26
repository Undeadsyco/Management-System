import connectToDb from '../../lib/mongodb';

export default async function handler(req, res, next) {
  try {
    const connection = await connectToDb();

    if (!connection) throw new Error("Error connecting to database");

    console.log('connection', connection);
    next();
    // res.json('success');
  } catch (error) {
    res.json({ error: error.message });
  }
}