exports.up = function(knex) {
  return knex.schema.createTable('Sales', row => {
    row.increments();

    row.string('Price_sold');

    row.foreign('Price_sold').references('cars.Vin');

    row.string('Sales_tax');

    row.foreign('Sales_tax').references('cars.Vin');

    row.string('Sales_profit');

    row.foreign('Sales_profit').references('cars.Vin');

    row.string('SoldBy');

    row
      .foreign('SoldBy')
      .references('Vin')
      .inTable('cars');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
