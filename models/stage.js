const {Sequelize, DataTypes, Model} = require('sequelize')

class Stage extends Model{
  static associate ({ Event, StageEvent, SetTime }) {
    // events
    Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
    })

    Stage.hasMany(SetTime, {
      foreignKey: "stage_id",
      as: SetTime
    })
}
}
Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  })

  module.exports = Stage