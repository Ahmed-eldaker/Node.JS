const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const logger = require("./middlewares/logger");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use("/tasks", tasks);
app.use(logger);

app.listen(port, () => {
  console.log("Server running on port 3000");
});

// import mongoose
const mongoose = require("mongoose");

// connect db
mongoose
  .connect("mongodb://localhost:27017/ToDoList")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

// create schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

// create model
const Task = mongoose.model("Task", taskSchema);
Task.find({ $or: [{ age: 30 }, { name: "mai" }] })
  .then((tasks) => {
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err);
  });
