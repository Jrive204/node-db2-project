exports.up = function(knex) {
  return knex.schema.createTable('cars', row => {
    row.increments();
    row
      .string('Vin', 150)
      .notNullable()
      .index();

    row.string('Make', 128).notNullable();

    row.string('Model', 128).notNullable();

    row.string('Mileage', 128).notNullable();

    row
      .boolean('OnLot')
      .defaultTo(true)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
