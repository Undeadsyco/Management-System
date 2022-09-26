import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { SectionController } from '../../../../utils/controllers';
import connectToDb from '../../../../lib/mongodb';
import { methodSwitch } from "../../../../utils/middleware";
import { section } from "../../../../utils/models/section";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;

    const connection = await connectToDb();
    if (!connection) throw new Error('unable to connect to database');

    switch (method) {
      case 'GET':
        const sections: section<string>[] = await SectionController.getAllSections();
        res.status(200).json({ sections });
        break;
      case 'POST':
        const createdSections: section<string>[] = await SectionController.createSections(body.sections);
        res.status(200).json({ message: 'created sections', sections: createdSections });
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        res.status(404)
        break;
    }
  } catch (error) {
    console.log('error in section api handler', error);
    res.status(500).json({ error });
  }
}

export default handler;