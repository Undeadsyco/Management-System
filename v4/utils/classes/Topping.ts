import { topping } from "../models/types";

/**
 * Topping class
 * @param {string} id
 * @param {string} _name
 * @param {string} _type
 * @param {string} _measurement
 * @param {number} _price
 * @param {Object} _amountPerServing
 */
class Topping implements topping<string, {}> {
  constructor(
    private id: string,
    private _name: string,
    private _type: string,
    private _measurement: string,
    private _price: number,
    private _amountPerServing: any
  ) {
    this.id = id;
    this._name = _name;
    this._type = _type;
    this._measurement = _measurement;
    this._price = _price;
    this._amountPerServing = _amountPerServing;
  }

  public get _id(): string {
    return this.id;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public get type(): string {
    return this._type;
  }
  
  public get measurement(): string {
    return this._measurement;
  }
  
  public get price(): number {
    return this._price;
  }
  
  public get amount_per_serving(): any {
    return this._amountPerServing;
  }

  /**
   * changes class into object format
   * @returns {topping} object in the shape of topping type
   */
  public toObj(): topping<string> {
    return {
      _id: this._id,
      name: this._name,
      type: this._type,
      measurement: this._measurement,
      price: this._price,
      amount_per_serving: this._amountPerServing
    }
  }
}

export default Topping;
