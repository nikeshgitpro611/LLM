const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/authRouter");

// 1) Middle ware
app.use(cors());
app.use(express.json());

// 2) Route
app.use('/api/auth', authRoute);

// 3) mongo db
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => console.log("Hey Db connected"))
  .catch((error) => console.error("Some thing went Wrong!", error));

// 4) Global Errors
app.use((err, res, req, next) => {
  err.statuCode = err.statuCode || 500;
  err.status = err.status || "error";

  res.status(err.statuCode).json({
    status: err.status,
    message: err.message,
  });
});

// 5) Server
const port = 3001;
app.listen(port, () => {
  console.log("Hey!, Server is running...!");
});
