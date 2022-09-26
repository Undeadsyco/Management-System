/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checkouts', {
    Checkout_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Register_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'register',
        key: 'Register_Id'
      }
    },
    Employee_Id: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'Employee_Id'
      }
    },
    Starting_Amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Time_assigned: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ending_Amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Entered_Ending_Amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Difference: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Checkout_Time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'checkouts'
  });
};
