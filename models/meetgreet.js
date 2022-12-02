const {Sequelize, DataTypes, Model} = require('sequelize')

class MeetGreet extends Model{}
MeetGreet.init({
    meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'MeetGreet',
      tableName: 'meet_greets',
      timestamps: false
    })

//EXPORT
module.exports = MeetGreet 