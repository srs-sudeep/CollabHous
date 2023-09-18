// Connect to MongoDB Atlas
const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log("Mongoose Connected");
  }).catch((error) => {
      console.log("Error connecting to MongoDB Atlas:",error);
  });
}


module.exports = connectDatabase;