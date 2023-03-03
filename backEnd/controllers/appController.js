"use strict";

var Todo = require("../models/appModel.js");

exports.list_all_tasks = function (req, res) {
  Todo.getAllTask(function (err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};

exports.create_a_task = function (req, res) {
  var new_task = new Todo(req.body);
  console.log("new_task: ", new_task);
  //handles null error
  if (!new_task.todo_name || !new_task.note || !new_task.id) {
    res
      .status(400)
      .send({ error: true, message: "Please provide id, note, name" });
  } else {
    Todo.createTask(new_task, function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  }
};

exports.delete_a_task = function (req, res) {
  var new_task = new Todo(req.body);
  console.log("new_task: ", new_task);
  // handles null error
  if (!new_task.todo_name || !new_task.note || !new_task.id) {
    res
      .status(400)
      .send({ error: true, message: "Please provide id, note, name" });
  } else {
    Todo.createTask(new_task, function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  }
};
