// external imports
const mongoose = require("mongoose");

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose.connect('mongodb+srv://brianjames:brianbj2004@clusterbj.pvmvkvd.mongodb.net/MilitaryCRUD?retryWrites=true&w=majority&appName=ClusterBJ')
  .then(() => {
    console.log('MongoDB is Already Connected')
  
  })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });   
}

module.exports = dbConnect;
