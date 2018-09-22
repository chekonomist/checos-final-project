exports.up = async function(knex, Promise) {
  // await knex
  //   .schema
  //   .dropTableIfExists('brokers')

  return knex
    .schema
    .createTable('brokers', (brokersTable)=>{
      brokersTable.increments();
      brokersTable.string('company_name')
      brokersTable.text('company_description')
      brokersTable.string('contact_name')
      brokersTable.string('contact_last_name')
      brokersTable.string('mobile_number')
      brokersTable.string('office_number')
      brokersTable.string('web_page')
      brokersTable.timestamps(true, true)

      return brokersTable
    })
};

exports.down = function(knex, Promise) {
  return knex
  .schema
  .dropTableIfExists('brokers')
};
