const { model, Schema } = require('mongoose');

const employeeScheme = new Schema({
  employee_id: {
    type: String,
    allowNull: false,
  },
  employee_name: {
    type: String,
    allowNull: false,
  },
  address: {
    street: {
      type: String,
      allowNull: false,
    },
    city: {
      type: String,
      allowNull: false,
    },
    state: {
      type: String,
      allowNull: false,
    },
  },
  birthday: {
    type: Date,
    allowNull: false,
  },
  password: {
    type: String,
    allowNull: false,
  },
  start_date: {
    type: Date,
    allowNull: false,
  },
  end_date: {
    type: Date,
    allowNull: true,
  },
  hourly_pay: {
    type: Number,
    allowNull: false,
  },
  position: {
    type: String,
    allowNull: false,
    default: 'Crew',
  },
  is_clocked_in: {
    type: Boolean,
    allowNull: false,
    default: false,
  },
  is_on_break: {
    type: Boolean,
    allowNull: false,
    default: false,
  },
}, { autoIndex: false });

const employeeModel = model('employees', employeeScheme);

module.exports = employeeModel;
