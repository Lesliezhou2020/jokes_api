const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection is established"))
  .catch(err => console.log('Connection error ', err));