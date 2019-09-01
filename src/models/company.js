'use strict';

const Asset = require('./asset');

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    code: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    hooks: {
      beforeSave: async company => {
        await company.updatePrice();
      }
    }
  });
  //Company.hasOne(Asset);

  Company.prototype.updatePrice = async function() {
    const stock = await StockMarket.search(this.code);
    if (stock == null) {
        new Error(`${this.code} could not be found on b3`);
    }
    this.price = stock.price
  }
  
  return Company;
};

