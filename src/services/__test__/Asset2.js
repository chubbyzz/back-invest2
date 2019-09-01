const {Schema, model, Decimal128} = require('mongoose');

const AssetSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId, ref: 'Company'
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Decimal128,
        required: true
    },
    tax: Decimal128
}, {
    timestamps: true
});


AssetSchema.methods.formatedPrice = function() {
    return parseFloat(this.price.toString());
}

AssetSchema.methods.total = function() {
    return this.formatedPrice() * this.quantity;
}

AssetSchema.methods.currentPrice = function() {
    return parseFloat(this.company.price.toString());
}

AssetSchema.methods.currentTotal = function() {
    return this.currentPrice() * this.quantity;
}

AssetSchema.methods.profit = function() {
    return parseFloat((this.total() - this.currentTotal()).toFixed(2));
}


module.exports = model('Asset', AssetSchema);