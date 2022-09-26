/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pizza', {
    pizza_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pizza_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    section_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    sectionSectionId: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'pizza'
  });
};
