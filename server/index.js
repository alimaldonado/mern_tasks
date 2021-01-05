const express = require('express');
const conectDB = require('./config/db');

const app = express();

conectDB();

const PORT = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});