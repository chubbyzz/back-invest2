const Company = require('../models/Company')
const Asset = require('../models/Asset')

module.exports = {
    async findOrStore(code) {
        const company = await Company.findOne({code}).exec();
        if(company != undefined) return company;

        return await Company.create({code});
    }
};