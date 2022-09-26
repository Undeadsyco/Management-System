/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('break_out_times', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Employee_Id: {
      type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
      allowNull: false,
      references: {
        model: 'employee',
        key: 'Employee_Id'
      }
    },
    Break_Time_Out: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'break_out_times'
  });
};
