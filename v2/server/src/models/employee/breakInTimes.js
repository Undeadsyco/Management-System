const { model, Schema, Types } = require('mongoose');

const breakInTimesSchema = new Schema({
  employee: {
    type: Types.ObjectId,
    ref: 'employees',
    required: true,
  },
  break_in_time: {
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

const breakInTimesModel = model('break_in_times', breakInTimesSchema);

module.exports = breakInTimesModel;
