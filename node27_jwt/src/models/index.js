// kết nối CSDL
const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(config.dbDatabase, config.dbUser, config.dbPass,
    {
        host: config.dbHost,
        port: config.dbPort,
        dialect: config.dbDialect // hệ CSDL đang sử dụng 
    })

module.exports = sequelize;

//yarn add sequelize-auto