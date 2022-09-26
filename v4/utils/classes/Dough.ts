import { dough } from "../models/types";

/**
 * Dough class
 * @param {string} id
 * @param {string} size
 * @param {string} weight
 * @param {number} price
 * @param {string} measurement
 */
class Dough implements dough<string> {
  private _measurement = 'OZ';

  constructor(private id: string, private _size: string, private _weight: number, private _price: number) {
    this.id = id;
    this._size = _size;
    this._weight = _weight;
    this._price = _price;
  }

  /**
   * gets dough id
   * @return {string} dough id
   */
  public get _id(): string {
    return this.id;
  }

  /**
   * gets dough size
   * @return {string} dough size
   */
  public get size(): string {
    return this._size;
  }

  /**
   * gets dough weight
   * @return {number} weight of dough
   */
  public get weight(): number {
    return this._weight;
  }

  /**
   * gets dough price
   * @return {number} dough price
   */
  public get price(): number {
    return this._price;
  }

  /**
   * gets dough unit of measurement 
   * @return {string} unit of measuement
   */
  public get measurement(): string {
    return this._measurement;
  }

  /**
   * changes class into object format
   * @returns {dough} object in the shape of dough type
   */
  public toObj(): dough<string> {
    return {
      _id: this._id,
      size: this._size,
      weight: this._weight,
      price: this._price,
      measurement: this.measurement
    }
  }
}

export default Dough;
