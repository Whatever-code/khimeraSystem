const mongoose = require('mongoose');

mongoose.connect(process.env.URI || 'mongodb://localhost/khimera', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('DB Connected.'))
  .catch(error => console.log(error));