const express = require('express');
const router = express.Router();

const Cars = require('../data/db.config');

// GET ------

router.get('/', (req, res) => {
  Cars('cars')
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Cars('cars')
    .where({ id: req.params.id }, 'id')
    .first()
    .then(cars => {
      cars
        ? console.log(cars) & res.status(200).json(cars)
        : res.status(500).json({ error: 'No Cars exist in this ID' });
    })
    .catch(err => res.status(500).json(err));
});

// POST ----

router.post('/', (req, res) => {
  Cars('cars')
    .insert(req.body)
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => res.status(500).json(err));
});

// PUT

router.put('/:id', (req, res) => {
  Cars('cars')
    .where({ id: req.params.id }, 'id')
    .update(req.body)
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => res.status(500).json(err));
});

// Delete

router.delete('/:id', (req, res) => {
  Cars('cars')
    .where({ id: req.params.id }, 'id')
    .del()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => res.status(500).json(err));
});
// router.post()

module.exports = router;
