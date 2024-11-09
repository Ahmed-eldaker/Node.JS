const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
app.use("/tasks", tasks);
require("dotenv").config();
const port = process.env.PORT || 3000;

const logger = require("./middlewares/logger");
app.use(logger);

app.listen(port, () => {
  console.log("Server running on port 3000");
});
