// dependencies:
import { Model, model, models, ObjectId, Schema } from 'mongoose';

// types:
import { dough } from './types';

const doughSchema: Schema<dough, Model<dough, any, any, any, any>, {}, {}, any, {}, "type", dough> = new Schema<dough>({
  size: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  measurement: {
    type: String,
    default: "OZ",
  }
}, { autoIndex: false });

export default models['dough'] ?? model<dough>('dough', doughSchema);