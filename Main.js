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
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/") {
    res.write("hello world from node.js");
  } else if (req.method == "GET" && req.url == "/home") {
    res.write("method supported for home");
  } else {
    res.write("method not supported");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
