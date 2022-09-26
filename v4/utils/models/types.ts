// dependencies:
import { ObjectId } from 'mongoose';

/**
 * Acceptable Id Types
 * @type {string | ObjectId}
 */
export type idTypeOptions = string | ObjectId;

/**
 * Acceptable topping amount/serving types
 * @type {Map<string, string> | Object}
 */
export type servingType = Map<string, string> | Object;

/** 
 * section interface
 * @typedef {Object} section
 * @property {idTypeOptions} _id
 * @property {string} name
 * @example section<(string or ObjectId)>
 */

/** @type {section} */
export interface section<IdType extends idTypeOptions = ObjectId> {
  /** @type {idTypeOptions} */ _id?: IdType;
  /** @type {string} */ name: string;
}

/** 
 * topping interface
 * @typedef {Object} topping
 * @property {idTypeOptions} _id
 * @property {string} name
 * @property {string} type
 * @property {string} measurement
 * @property {number} price
 * @property {servingType} amount_per_serving
 * @example topping<(string or ObjectId), (Map<string, string> or Object)>
 */

/** @type {topping} */
export interface topping<
  IdType extends idTypeOptions = ObjectId,
  ServingType extends servingType = Map<string, string>
  > {
  /** @type {idTypeOptions} */ _id?: IdType;
  /** @type {string} */ name: string;
  /** @type {string} */ type: string;
  /** @type {string} */ measurement: string;
  /** @type {number} */ price: number;
  /** @type {servingType} */ amount_per_serving: ServingType;
}

/** 
 * IdType param: value type of _id property
 * @typedef {Object} dough
 * @property {idTypeOptions} _id
 * @property {string} size
 * @property {number} weight
 * @property {number} price
 * @property {string} measurement
 * @example dough<(string or ObjectId)>
 */

/** @type {dough} */
export interface dough<IdType extends idTypeOptions = ObjectId> {
  /** @type {idTypeOptions} */ _id?: IdType;
  /** @type {string} */ size: string;
  /** @type {number} */ weight: number;
  /** @type {number} */ price: number;
  /** @type {string} */ measurement: string;
}

export type objectType = dough<idTypeOptions> | topping<idTypeOptions, servingType> | section<idTypeOptions>;

export type objectOptions = string | ObjectId | objectType

/**
 * pizza interface
 * @typedef {Object} pizza
 * @property {idTypeOptions} _id
 * @property {string} name
 * @property {objectOptions} section 
 * @property {objectOptions} toppings
 * @property {objectOptions} sizes
 * @example pizza<(string or ObectId), section<(string or ObectId)>, topping<(string or ObectId)>[], dough<(string or ObectId)>[]>
 */
/** @type {pizza} */
export interface pizza<
  IdType extends idTypeOptions = ObjectId,
  SectionType extends objectOptions = ObjectId,
  ToppingType extends objectOptions[] = ObjectId[],
  DoughType extends objectOptions[] = ObjectId[],
  > {
  /** @type {idTypeOptions} */ _id?: IdType;
  /** @type {string} */ name: string;
  /** @type {objectOptions} */ section: SectionType;
  /** @type {objectOptions} */ toppings: ToppingType;
  /** @type {objectOptions} */ sizes: Map<string, DoughType>
}

/**
 * @typedef {Object} menu
 * @property {pizza[]} pizzas
 * @property {section[]} sections
 * @property {topping[]} toppings
 */
/** @type {menu} */
export interface menu {
  /** @type {pizza[]} */ pizzas: pizza<string, section<string>, topping<string, {}>[], string[]>[];
  /** @type {section[]} */ sections: section<string>[];
  /** @type {topping[]} */ toppings: topping<string, {}>[];
}
