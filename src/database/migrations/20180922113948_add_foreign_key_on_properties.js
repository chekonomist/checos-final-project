
exports.up = function(knex, Promise) {
  return knex
  .schema.table('properties', (propertiesTable)=>{
    propertiesTable.integer('broker_id')
      .unsigned()
      .references('id')
      .inTable('brokers')
      .onDelete("cascade")
      .onUpdate("cascade")
      
      return propertiesTable
  })
};

exports.down = function(knex, Promise) {
  return knex
  .schema.table('properties', (propertiesTable)=>{
    propertiesTable.dropForeign('broker_id')
    propertiesTable.dropColumn('broker_id')

    return propertiesTable
  })
};
