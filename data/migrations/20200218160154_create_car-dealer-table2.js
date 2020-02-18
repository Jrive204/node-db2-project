exports.up = function(knex) {
  return knex.schema.table('cars', col => {
    col.string('Transmission', 128);
    col.string('title', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumn('Transmission');
    tbl.dropColumn('title');
  });
};
