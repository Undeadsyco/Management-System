/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('section', {
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    section: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'section'
  });
};
