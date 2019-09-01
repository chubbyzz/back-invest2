const db = require('./index')

describe('Persist test', () => {
    it('setPrice', () => {
        console.log(db.sync({
            force: true
        }));
        
        //await sequelize.truncate({force: true});
    });
});