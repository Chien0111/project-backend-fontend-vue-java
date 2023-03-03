"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/appController");

  // todoList Routes
  app
    .route("/todos")
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .delete(todoList.delete_a_task);
};
