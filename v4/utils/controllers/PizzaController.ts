//dependencies
import { ObjectId, Types } from 'mongoose'

//utils
import { pizzaModel } from "../models";
import { dough, pizza, section, topping } from "../models/types";
import { Pizza, Section, Dough, Topping } from "../classes";
import Controller from "./types";

/**
 * controller class for interacting with dough model 
 * to create/edit/delete records and creating dough objects 
 * when retrived records
 */
class PizzaController implements Controller<pizza<string, section<string>, topping<string, {}>[], string[]>> {
  /**
   * retrives selected document with given id
   * @param {string} pizzaId id to be used to look up document
   * @returns {pizza<string, section<string>, Array<topping<string, {}>>, Array<string>>} pizza object
   */
  async getOne(pizzaId: string): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>> {
    const pizza: pizza<ObjectId, section, topping[], dough[]> = await pizzaModel<pizza>
      .findById(new Types.ObjectId(pizzaId))
      .populate('section')
      .populate('toppings')
      .populate('sizes') as unknown as pizza<ObjectId, section, topping[], dough[]>;
    if (!pizza) throw new Error(`was unable to find pizza matching id: ${pizzaId}`);
    // const sizes = new Map<string, string[]>()
    // pizza.sizes.forEach((value, key) => {
    //   sizes.set(key, value.map(id => id.toString()));
    // })
    return new Pizza(
      pizza['_id'].toString(),
      pizza.name,
      new Section(pizza.section['_id'].toString(), pizza.section.name).toObj(),
      pizza.toppings.map((topping: topping) => {
        const amountPerServing = {};
        topping.amount_per_serving.forEach((value, key) => {
          amountPerServing[key] = value;
        });
        return new Topping(topping['_id'].toString(), topping.name, topping.type, topping.measurement, topping.price, amountPerServing).toObj()
      }),
      // sizes
    ).toObj()
  }

  /**
   * retrives all documents from model
   * @returns {Array<pizza<string, section<string>, Array<topping<string, {}>>, Array<string>>>} a list of pizza objects
   */
  async getAll(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>[]> {
    const pizzaList: pizza<ObjectId, section, topping[], dough[]>[] = await pizzaModel<pizza>
      .find()
      .populate('section')
      .populate('toppings')
      .populate('sizes') as unknown as pizza<ObjectId, section, topping[], dough[]>[];
    if (!pizzaList) throw new Error('was unable to retrive pizza list');

    return pizzaList.map((pizza: pizza<ObjectId, section, topping[], dough[]>) => {
      // const sizes = new Map<string, string[]>()
      // pizza.sizes.forEach((value, key) => {
      //   sizes.set(key, value.map(id => id.toString()));
      // })

      return new Pizza(
        pizza['_id'].toString(),
        pizza.name,
        new Section(pizza.section['_id'].toString(), pizza.section.name).toObj(),
        pizza.toppings.map((topping: topping) => {
          const amountPerServing = {};
          topping.amount_per_serving.forEach((value, key) => {
            amountPerServing[key] = value;
          });
          return new Topping(topping['_id'].toString(), topping.name, topping.type, topping.measurement, topping.price, amountPerServing).toObj()
        }),
        // sizes
      ).toObj()
    })
  }

  /** method not yet implemented */
  async createOne(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async createMany(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>[]> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editOne(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async editMany(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>[]> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteOne(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>> {
    throw new Error('Method not implemented.');
  }

  /** method not yet implemented */
  async deleteMany(): Promise<pizza<string, section<string>, topping<string, {}>[], string[]>[]> {
    throw new Error('Method not implemented.');
  }
}

export default new PizzaController();