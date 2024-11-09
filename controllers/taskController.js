exports.getTasks = (req, res) => {
  res.send("get data");
};

exports.createTask = (req, res) => {
  res.send("post data");
};
exports.updateTask = (req, res) => {
  res.send("update data");
};
exports.deleteTask = (req, res) => {
  res.send("delete data");
};

// module.exports={getTasks,createTask,updateTask,deleteTask}
