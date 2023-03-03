"user strict";
var sql = require("./db.js");

//Task object constructor
var Todo = function (todo) {
  console.log(todo);
  this.id = todo.id;
  this.todo_name = todo.todo_name;
  this.note = todo.note;
  this.create_date = new Date();
};
Todo.createTask = function createUser(newTask, result) {
  sql.query("INSERT INTO todo set ?", newTask, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(newTask);
      result(null, newTask);
    }
  });
};
// Todo.deleteTask = function deleteUser(newTask_id, result) {
//   sql.query(
//     `DELETE FROM todo WHERE id = ${newTask_id}`,
//     newTask_id,
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         console.log(newTask_id);
//         result(null, newTask_id);
//       }
//     }
//   );
// };
Todo.getAllTask = function getAllTask(result) {
  sql.query("Select * from todo", function (err, res) {
    console.log("res", res);

    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

module.exports = Todo;
