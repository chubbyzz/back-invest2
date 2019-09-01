'use strict';

const Company = require('./company');

module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    tax: DataTypes.DECIMAL,
  }, {});
  //Asset.belongsTo(Company, {foreignKey: 'company_id'});
  return Asset;
};