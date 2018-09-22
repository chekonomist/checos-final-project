
exports.up = async function(knex, Promise) {
  await knex
    .schema
    .dropTableIfExists('properties')


  return knex
  .schema
  .createTable('properties', (propertiesTable) =>{
      propertiesTable.increments();
      propertiesTable.string('property_type')
      propertiesTable.string('deal_type')
      propertiesTable.string('property_title')
      propertiesTable.text('property_description')
      propertiesTable.integer('half_baths')
      propertiesTable.integer('parking_spaces')
      propertiesTable.integer('construction_square_meters')
      propertiesTable.integer('age')
      propertiesTable.boolean('is_it_new')
      propertiesTable.integer('in_which_floor_is')
      propertiesTable.integer('monthly_rent')
      propertiesTable.string('state')
      propertiesTable.string('city')
      propertiesTable.string('neighborhood')
      propertiesTable.string('code_plus')
      propertiesTable.string('street_name')
      propertiesTable.integer('exterior_number')
      propertiesTable.integer('zip_code')
      propertiesTable.timestamps(true, true)

      return propertiesTable
  })
};

exports.down = async function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('properties')
};
