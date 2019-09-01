const CompanyService = require('../services/CompanyService');
const Asset = require('../models/Asset')

module.exports = {
    async store(record) {
        const company = await CompanyService.findOrStore(record.code);
        
        const {quantity, price, tax} = record;
        
        const asset = await Asset.create({
            company,
            quantity,
            price,
            tax
        });

        return this.formatAsset(asset);
    },

    formatAsset(asset) {
        // add code and price to object root and order _id
        const assetWithCompany = {
            _id: asset._id,
            code: asset.company.code,
            total: asset.total(),
            currentPrice: asset.currentPrice(),
            currentTotal: asset.currentTotal(),
            profit: asset.profit(),
            ...asset._doc,
            price: asset.formatedPrice(),
        }
        // remove company and doc version from response
        const {company, __v, ...noCompany} = assetWithCompany;
        return noCompany;
    },

    get(filter) {
        
    }
};