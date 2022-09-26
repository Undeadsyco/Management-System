import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import connect from "../../lib/mongodb"

export const connectToDb = async (handler: NextApiHandler) => {
  try {
    const connection = await connect();

    if (!connection) throw new Error('was unable to connect to database');

    return (req: NextApiRequest, res: NextApiResponse) => {
      return handler(req, res)
    }
  } catch (error) {
    console.log(error);
  }
}

type callbackTypes = {
  getCallback?: Function | undefined;
  postCallback?: Function | undefined;
  putCallback?: Function | undefined;
  deleteCallback?: Function | undefined;
  defaultCallback?: Function | undefined;
}

const callbackDefaults = {
  getCallback: undefined,
  postCallback: undefined,
  putCallback: undefined,
  deleteCallback: undefined,
  defaultCallback: undefined,
}

export const methodSwitch = (method: string, callbacks: callbackTypes = callbackDefaults): void => {
  const { getCallback, postCallback, putCallback, deleteCallback, defaultCallback } = callbacks;
  switch (method) {
    case 'GET':
      getCallback();
      break;
    case 'POST':
      postCallback();
      break;
    case 'PUT':
      putCallback();
      break;
    case 'DELETE':
      deleteCallback();
      break;
    default:
      defaultCallback()
      break;
  }
}