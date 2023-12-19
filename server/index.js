const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AayanFazal2007',
    database: 'ScoutSchema'
  });
const app = express(); 
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Returns Competition names 
app.get('/api/comp', (req, res) => {
  connection.query('SHOW tables', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send the data as JSON to the client
    res.json(results);
  });
});

//Returns specific team data 
app.get('/api/:comp/:teamNum', (req, res) => {
    const getComp = req.params.comp; 
    const getTeam = req.params.teamNum; 
    connection.query('SELECT  * FROM ?? WHERE teamNum = ?;',[getComp,getTeam],(err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Send the data as JSON to the client
      res.json(results);
    });
  });

  //Returns all teams in selected comp
  app.get('/api/:comp/all/teams', (req, res) => {
    const getComp = req.params.comp; 
    connection.query('SELECT DISTINCT teamNum FROM ?? ORDER BY teamNum ASC;',[getComp],(err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Send the data as JSON to the client
      res.json(results);
    });
  });


// Start the server
const PORT = 3036;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
