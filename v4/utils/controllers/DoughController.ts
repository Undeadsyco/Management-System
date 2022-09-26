//dependencies
import { Types } from 'mongoose'

import { doughModel } from "../models";
import { dough } from "../models/types";
import { Dough } from "../classes";
import Controller from "./types";

/**
 * controller class for interacting with dough model 
 * to create/edit/delete records and creating dough objects 
 * when retrived records
 */
class DoughController implements Controller<dough<string>> {
  /**
   * retrives selected document with given id
   * @param {string} doughId id to be used to look up document
   * @returns {dough<string>} dough object
   */
  async getOne(doughId: string): Promise<dough<string>> {
    const dough: dough = await doughModel<dough>.findById(new Types.ObjectId(doughId)) as unknown as dough;
    if (!dough) throw new Error(`was unable to find dough matching id: ${doughId}`);

    return new Dough(dough['_id'].toString(), dough.size, dough.weight, dough.price).toObj()
  }

  /**
   * retrives all documents from model
   * @returns {Array<dough<string>>} list of dough objects
   */
  async getAll(): Promise<dough<string>[]> {
    const doughList: dough[] = await doughModel<dough>.find() as unknown as dough[];
    if (!doughList) throw new Error('was unable to retrive dough list');

    return doughList.map((dough: dough) => new Dough(dough['_id'].toString(), dough.size, dough.weight, dough.price).toObj())
  }
  
  /** method not yet implemented */
  async createOne(): Promise<dough<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async createMany(): Promise<dough<string>[]> {
    throw new Error('Method not implemented.');
  }
  
  /** method not yet implemented */
  async editOne(): Promise<dough<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editMany(): Promise<dough<string>[]> {
    throw new Error('Method not implemented.');
  }
  
  /** method not yet implemented */
  async deleteOne(): Promise<dough<string>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteMany(): Promise<dough<string>[]> {
    throw new Error('Method not implemented.');
  }
}

export default new DoughController();