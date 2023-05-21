const express = require("express");
const app = express();

const nearestRouter = require("./routes/nearest");
app.use("/nearest", nearestRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
//https://github.com/Noufel17/Dekar_cars.git
