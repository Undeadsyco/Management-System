/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('register', {
    Register_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Register_Name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Register_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Is_Assigned: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'register'
  });
};
