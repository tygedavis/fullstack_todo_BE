const db = require('../database/dbConfig.js');

module.exports = {
  add,
  findUserTodos,
  update
}

function add(todo) {
  console.log(todo)
  return db('todos')
    .insert(todo);
}

function findUserTodos(id) {
  return db('todos')
    .join('users', function() {
      this
        .on('todos.user_id', '=', 'users.id')
    })
    .select('todos.name', 'todos.completed', 'todos.user_id as Todo-User-Id', 'users.id as Users_Id')
    .where("todos.user_id", id);
}

function update() {

}