const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors')
const { Mongoose } = require('mongoose');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(logger('dev'))



app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});