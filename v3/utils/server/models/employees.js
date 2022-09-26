import { model, Schema, ObjectId, models } from "mongoose";

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: new Schema({
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
    }, { autoIndex: false}),
    default: {},
  },
  position: {
    type: String,
    required: true,
  },
  pay_type: {
    type: String,
    required: true,
  },
  pay_rate: {
    type: Number,
    required: true,
  },
  accounts: {
    type: Map,
    of: new Schema({
      username: { type: String, required: true },
      password: { type: String, required: true },
    }, { autoIndex: false }),
  },
  start_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  end_date: {
    type: Date,
    required: false,
    default: null,
  },
  is_clocked_in: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_on_break: {
    type: Boolean, 
    required: true,
    default: false,
  },
}, { autoIndex: false });

export default models['employees'] ?? model("employees", employeeSchema);
