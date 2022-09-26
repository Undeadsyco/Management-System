// dependencies:
import { model, models, ObjectId, Schema } from 'mongoose';

// types
import { section } from './types';

const sectionSchema = new Schema<section>({
  name: {
    type: String,
    required: true,
  }
}, { autoIndex: false });

export default models['section'] ?? model<section>('section', sectionSchema);
