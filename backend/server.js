const mongoose = require('mongoose');
const app = require('./app');

let port = process.env.PORT;

if (port == null || port === '') {
  port = 5000;
}

const {MONGODB_URI} = process.env;

mongoose.connect(MONGODB_URI);


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
