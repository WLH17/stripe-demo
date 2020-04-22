require('dotenv').config();
const express = require('express'),
      ctrl = require('./controller'),
      {SERVER_PORT} = process.env,
      app = express();
    
app.use(express.json());

app.post('/api/payment', ctrl.completePayment);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));