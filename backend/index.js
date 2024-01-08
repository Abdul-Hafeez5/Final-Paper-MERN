const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { allpoetry, newPoetry } = require("./controllers/poetryController");
const app = express();
const port = 4000;
mongoose
  .connect(
    "mongodb+srv://Poetry:Poetry@cluster0.jcuuxjt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Conected");
  });

app.use(express.json());
app.use(cors());

app.get("/allPoetries", allpoetry);
app.post("/newPoetry", newPoetry);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
