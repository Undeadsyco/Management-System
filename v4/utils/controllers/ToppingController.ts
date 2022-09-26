//dependencies
import { Types } from 'mongoose'

// utils
import { toppingModel } from "../models";
import { topping } from "../models/types";
import { Topping } from "../classes";
import Controller from "./types";

/**
 * controller class for interacting with dough model 
 * to create/edit/delete records and creating dough objects 
 * when retrived records
 */
class ToppingController implements Controller<topping<string, {}>> {
  /**
   * retrives selected document with given id
   * @param {string} toppingId id to be used to look up document
   * @returns {topping<string, object>} topping object
   */
  async getOne(toppingId: string): Promise<topping<string, {}>> {
    const topping: topping = await toppingModel<topping>.findById(new Types.ObjectId(toppingId)) as unknown as topping;
    if (!topping) throw new Error(`was unable to find topping matching id: ${toppingId}`);

    const amountPerServing = {};
    topping.amount_per_serving.forEach((value, key) => {
      amountPerServing[key] = value;
    });

    return new Topping(topping['_id'].toString(), topping.name, topping.type, topping.measurement, topping.price, amountPerServing).toObj()
  }

  /**
   * retrives all documents from model
   * @returns {Array<topping<string, object>>} list of topping objects
   */
  async getAll(): Promise<topping<string, {}>[]> {
    const toppingList: topping[] = await toppingModel<topping>.find() as unknown as topping[];
    if (!toppingList) throw new Error('was unable to retrive topping list');

    return toppingList.map((topping: topping) => {
      const amountPerServing = {};
      topping.amount_per_serving.forEach((value, key) => {
        amountPerServing[key] = value;
      });

      return new Topping(topping['_id'].toString(), topping.name, topping.type, topping.measurement, topping.price, amountPerServing).toObj()
    })
  }

  /** method not yet implemented */
  async createOne(): Promise<topping<string, {}>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async createMany(): Promise<topping<string, {}>[]> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editOne(): Promise<topping<string, {}>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editMany(): Promise<topping<string, {}>[]> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteOne(): Promise<topping<string, {}>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteMany(): Promise<topping<string, {}>[]> {
    throw new Error('Method not implemented.');
  }
}

export default new ToppingController();