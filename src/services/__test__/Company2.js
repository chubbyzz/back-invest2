const {Schema, model, Decimal128} = require('mongoose');
const StockMarket = require('./../libs/StockMarket')

const CompanySchema = new Schema({
    code: {
        type: String,
        require: true
    },
    price: {
        type: Decimal128,
        require: true
    }
});

CompanySchema.pre('save', async function(next) {
    const stock = await StockMarket.search(this.code);
    if (stock == null) {
        next(new Error(`${this.code} could not be found on b3`));
    } else {
        this.price = stock.price
        next();
    }
});

module.exports = model('Company', CompanySchema);