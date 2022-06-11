const { createPool } = require("mysql");
/* Connection pool creation - START */
const db = createPool({
    port: 3306,
    host: "us-cdbr-east-05.cleardb.net",
    user: "b256efbc36fc71",
    password: "33b387c0",
    database: "heroku_0e1484b05a082cc",
    connectionLimit: 10,
})
/* Connection pool creation - END */

module.exports = db;