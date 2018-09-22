const { Model } = require('objection')

class Broker extends Model{
  static get tableName(){
    return 'brokers'
  }

  static get relationMappings(){
    const Property = require('./Property.js')

    return{
      properties:{
        relation: Model.HasManyRelation,
        modelClass: Property,
        join: {
          from: 'brokers.id',
          to: 'properties.broker_id'
        }
      }
    }
  }
}

  module.exports = Broker
