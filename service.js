const express = require("express");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
dotenv.config();

// defining routes
readdirSync("./routes").map((route) => {
  console.log(route.split(".")[0]);
  app.use(`/${route.split(".")[0]}`, require("./routes/" + route));
});

// connecting to database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));

//running server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
