/** @module atoms */

import { atom } from 'recoil';
import { menu, pizza, section, topping } from '../models/types';

const defaultValue: menu = {
  sections: [],
  pizzas: [],
  toppings: []
};

export const menuState = atom({
  key: 'menuState',
  default: defaultValue
});

export const viewState = atom({
  key: 'viewState',
  default: 'menu',
});

export const sectionState = atom({
  key: 'sectionState',
  default: 'Signiture',
});

export const pizzaState = atom({
  key: 'pizzaState',
  default: {} as pizza<string, section<string>, topping<string, {}>[], string[]> 
});