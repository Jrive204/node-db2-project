exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function() {
      const cars = [
        {
          Vin: '123456111',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: '12',
          OnLot: true,
          Transmission: 'V8',
          title: 'Clean'
        },
        {
          Vin: '1234561112',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: '12',
          OnLot: true,
          Transmission: 'V8',
          title: 'Clean'
        },
        {
          Vin: '1234561113',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: '12',
          OnLot: true,
          Transmission: 'V8',
          title: 'Clean'
        },
        {
          Vin: '1234561114',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: '12',
          OnLot: true,
          Transmission: 'V8',
          title: 'Clean'
        },
        {
          Vin: '123456111114',
          Make: 'Ford',
          Model: 'Mustang',
          Mileage: '12',
          OnLot: true,
          Transmission: 'V8',
          title: 'Clean'
        }
      ];

      // Inserts seed entries
      return knex('cars').insert(cars);
    });
};
