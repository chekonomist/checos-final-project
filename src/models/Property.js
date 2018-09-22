const { Model } = require('objection')

class Property extends Model{
  static get tableName(){
    return 'properties'
  }

  static get relationMappings(){
    const Broker = require('./Broker.js')

    return{
      brokers:{
        relation: Model.BelongsToOneRelation,
        modelClass: Broker,
        join: {
          from: 'properties.broker_id',
          to: 'brokers.id'
        }
      }
    }
  }
}

module.exports = Property
