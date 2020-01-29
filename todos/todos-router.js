const router = require('express').Router();

const Todos = require('../todos/todos-model');

router.post('/todos', (req,res) => {
  let userId = req.body;

  userId = {...userId, user_id: req.session.user.id}

  console.log(userId)

  if (req.session && req.session.user) {
    Todos.add(userId)
      .then(newTodo => {
        console.log(newTodo)
        res.status(201).json(newTodo)
      })
      .catch(err => {
        res.status(500).json({ error: "The database had an error with the POST request" })
      })
  } else {
    res.status(400).json({ error: "Invalid Credentials. Please login." });
  };
});

router.get('/todos', (req,res) => {
  var sessionId = req.session.user.id;

  if (req.session && req.session.user) {
    Todos.findUserTodos(sessionId)
      .then(todos => {
        res.status(200).json(todos)
      })
      .catch(err => {
        res.status(500).json({ error: "The database had an error with the GET request" })
      })
  } else {
    res.status(400).json({ error: "Invalid Credentials. Please login." });
  };
});

module.exports = router;