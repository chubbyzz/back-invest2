const express = require("express");
const AssetController = require('./controllers/AssetController');
const StockMarket = require('./libs/StockMarket');
const routes = express.Router();


routes.post('/assets/create', AssetController.store);
routes.get('/', async (request, response) => {
    const data = await StockMarket.search('LREN32');
    return response.json({
        success: true,
        data: data
    });
})

module.exports = routes;