// set up path for root
// set up middleware for json and url encoding
// set up path for NotesRoutes

const express = require("express");
const mongoose = require("mongoose");
const notesRoutes = require("./routes/notesRoutes.js");

// put this in .env
const PORT = process.env.PORT || 8081;
const DB_URL = "mongodb+srv://dbAdmin:68JF9Ksj8S0M0Cxb@week06cluster.e6itse0.mongodb.net/";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set up route to root / path
app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO ROOT OF SERVER HELL YEAH</h1>")
});

// set up route to mongoose
app.use("/api", notesRoutes);

// set up connection to mongodb using connection string and mongoose
mongoose.connect(DB_URL)
  .then(() => {
    console.log("Success connect to mongoDB atlas server yahoo");
    app.listen(PORT, () => {
      console.log(`Server listening at port: ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
    console.log("Could not connect to MongoDB server!");
  });
