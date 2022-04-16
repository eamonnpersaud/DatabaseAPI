const mongoose = require("mongoose")
require("dotenv").config()

mongoose
  .connect("mongodb+srv://Eamonn:MnNPCMlZwYyiioLv@eamonn.eh33q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err))
