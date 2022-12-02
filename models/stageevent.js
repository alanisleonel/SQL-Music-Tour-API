const {Sequelize, DataTypes, Model} = require('sequelize')

class StageEvent extends Model{}
StageEvent.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false,
  })

  module.exports = StageEvent