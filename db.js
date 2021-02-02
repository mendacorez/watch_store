const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'msqrd228',
    host: 'localhost',
    port: 5432,
    database: 'watches_shop_V2'
})

module.exports = pool;