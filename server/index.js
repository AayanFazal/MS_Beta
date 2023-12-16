const fs = require('fs');
const csv = require('csv-parser');
const mysql = require('mysql');

// MySQL database connection configuration
const dbConfig = {
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Specify the path to CSV file
const csvFilePath = 'path/to/your/file.csv';

// Read CSV file and insert data into MySQL
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Adjust column names based on your CSV structure and MySQL table
    const sql = 'INSERT INTO your_table_name SET ?';

    // Execute the SQL query
    connection.query(sql, row, (err, results) => {
      if (err) {
        console.error('Error inserting row:', err);
      } else {
        console.log('Row inserted:', results);
      }
    });
  })
  .on('end', () => {
    // Close the MySQL connection when finished
    connection.end();
    console.log('MySQL connection closed');
  });
