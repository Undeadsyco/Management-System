const { model, Schema, Types } = require('mongoose');

const breakOutTimesSchema = new Schema({
  employee: {
    type: Types.ObjectId,
    ref: 'employees',
    required: true,
  },
  break_out_time: {
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

const breakOutTimesModel = model('break_out_times', breakOutTimesSchema);

module.exports = breakOutTimesModel;
