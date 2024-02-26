//require connection
const connection = require("../config/database");

//import express validator
const {validationResult} = require('express-validator');

const index = (req, res) => {
    //query
    connection.query('SELECT * FROM bukucard ORDER BY id desc',
    function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows
            })
        }
    });
};
