/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    Employee_Id: {
      type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    Employee_Name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    Birthday: {
      type: DataTypes.STRING(75),
      allowNull: false
    },  
    Password: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Start_Date: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    End_Date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hourly_pay: {
      type: "DOUBLE",
      allowNull: false
    },
    Position: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Is_Clocked_In: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Is_On_Break: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'employee'
  });
};
