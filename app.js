const express = require("express");
const app = express();
app.use(express.static("public"));

app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/users", (req, res) => {
  res.send("hello world from node.js");
});
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`user id is : ${userId}`);
});
data = { userName: "ahmed", password: 123456 };

const AJV = require("ajv");
const ajv = new AJV();
const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer", minimum: 18 },
  },
  required: ["name", "age"],
};
const authMiddleware = (req, res, next) => {
  console.log("waiting....");

  // res.send("waiting....");
  next();
};

app.post("/login", authMiddleware, (req, res) => {
  console.log("accepted");

  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    return res.status(400).json({ errors: validate.errors });
  }
  const { name, age } = req.body;
  res.send(`name=${name}  ,  age =${age}`);
});

app.get("/setCookie", (req, res) => {
  res.cookie("name", "Ahmed", { maxAge: 30000, httpOnly: true });
  res.send("cookie sent");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
