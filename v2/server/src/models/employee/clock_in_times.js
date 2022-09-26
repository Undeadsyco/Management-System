const { model, Schema, Types } = require('mongoose');

const clockInTimeSchema = new Schema({
  employee: {
    type: Types.ObjectId,
    ref: 'employee',
    required: true,
  },
  clocked_in_at: {
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

const clockInTimeModel = model('clock_in_times', clockInTimeSchema);

module.exports = clockInTimeModel;
