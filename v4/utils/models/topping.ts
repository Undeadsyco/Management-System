// dependencies:
import { model, models, ObjectId, Schema } from 'mongoose';

// types:
import { topping } from './types';

const toppingSchema = new Schema<topping>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  measurement: {
    type: String,
    required: true,
  },
  price: { 
    type: Number,
    required: true,
  },
  amount_per_serving: {
    type: Map,
    of: String,
    default: new Map<string, string>()
  }
}, { autoIndex: false });

export default models['topping'] ?? model<topping>('topping', toppingSchema);