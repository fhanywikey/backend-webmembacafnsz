let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'db_buku'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('koneksi sukses');
   }
 })

module.exports = connection; 