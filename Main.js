// let x = require("./Index.js");
// console.log(x);
// os
// const os = require("os");
// console.log(os.hostname());
// const path = require("path");
// console.log(path.basename("/test/file.txt"));
// console.log(path.parse(__dirname,));
// const fs = require("fs");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw console.log(err);
//   console.log(data);
// });
// fs.writeFile("output.txt", "from node file", (err) => {
//   if (err) throw err;
//   console.log("file saved");
// });
// fs.unlink("output.txt", (err) => {
//   if (err) throw err;
//   console.log("deleted!");
// });
// fs.mkdir("newFolder", (err) => {
//   if (err) throw err;
//   console.log("created!");
// });
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method == "GET" && req.url == "/home") {
//     res.write("hello world from node.js");
//   } else if (req.method == "GET" && req.url == "/home") {
//     res.write("method supported for home");
//   } else {
//     res.write("method not supported");
//   }
//   res.end();
// });

const express = require("express");
const app = express();
// const port = 3000;
// app.use(express.urlencoded({ extended: true }));
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

app.post("/login", (req, res) => {
  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  if (!valid) {
    return res.status(400).json({ errors: validate.errors });
  }
  const { name, age } = req.body;
  res.send(`name=${name}  ,  age =${age}`);
});

// localhost:3000/users/5
// app.get('/user')
// app.post()
app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
