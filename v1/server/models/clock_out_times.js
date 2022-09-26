/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clock_out_times', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Employee_Id: {
      type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'Employee_Id'
      }
    },
    Time_Out: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'clock_out_times'
  });
};
