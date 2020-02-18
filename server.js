const express = require('express');
const InventoryRouter = require('./Routes/Inventory-Router');

const server = express();

server.use(express.json());

server.use('/api/inventory', InventoryRouter);

module.exports = server;
