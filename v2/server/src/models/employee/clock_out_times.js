const { model, Schema, Types } = require('mongoose');

const clockOutTimeSchema = new Schema({
  employee: {
    type: Types.ObjectId,
    ref: 'employee',
    required: true,
  },
  clocked_out_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: null,
  },
  updated_by: {
    type: Types.ObjectId,
    ref: 'employees',
    default: null,
  },
}, { autoIndex: false });

const clockOutTimeModel = model('clock_out_times', clockOutTimeSchema);

module.exports = clockOutTimeModel;
