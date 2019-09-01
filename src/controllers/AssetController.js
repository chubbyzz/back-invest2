const Asset = require('../models/Asset')

const AssetService = require('./../../src/services/AssetService')

module.exports = {
    async store(request, response) {
        const {code, price, quantity, tax} = request.body;
        try {
            const asset = await AssetService.store({code, price, quantity, tax});

            return response.json({
                success: true,
                data: asset
            });
        } catch (error) {
            return response.json({
                success: false,
                error: error.message
            });
        }
    }
};