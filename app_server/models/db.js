const mongoose = require('mongoose');
const dbURI = "mongodb+srv://Donnacha:Tucca@cluster0.erbsjit.mongodb.net/HobbySYS?retryWrites=true&w=majority&appName=Cluster0";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
      err=> {console.log(err)}
      );
}
 catch (e) {
  console.log("could not connect");
}