const express = require("express");
const cors = require("cors");
const reportcard = require("./routes/reportcard.js");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Student is getting created");
});
app.use("/api", reportcard);
module.exports = app;