const express = require("express");
const mongoose = require("mongoose");
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


  app.get("/allPoetries", allpoetry)
  app.post("/newPoetry", newPoetry)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
