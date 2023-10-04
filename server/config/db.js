const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://0.0.0.0:27017/SneakerXchange", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
