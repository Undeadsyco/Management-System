// dependencies:
import { model, models, ObjectId, Schema, Types } from 'mongoose';

// utils:
import { pizza } from './types';

const pizzaSchema = new Schema<pizza>({
  name: {
    type: String,
    required: true,
  },
  section: {
    type: Types.ObjectId,
    ref: 'section',
    required: true,
    default: {},
  },
  toppings: [{
    type: Types.ObjectId,
    ref: 'topping',
    required: true,
    default: [],
  }],
  sizes: {
    type: Map,
    of: [
      new Schema({
        handle: String,
        dough: [{
          type: Types.ObjectId,
          ref: 'dough'
        }] 
      })
    ],
    default: new Map<string, ObjectId[]>()
  },
}, { autoIndex: false });

export default models['pizza'] ?? model<pizza>('pizza', pizzaSchema);