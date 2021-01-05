const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'nideshop',
    prefix: 'nideshop_',
    encoding: 'utf8mb4',
    host: '8.131.255.126',
    port: '3306',
    user: 'root',
    password: 'ruBO8823#',
    dateStrings: true
};