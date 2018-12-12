const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  completedAt: {
    type: Number,
  },
});

// const newTodo = new Todo({
//   text: 'Cook dinner',
// });

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo.');
// });

const newTodo = new Todo({
  text: 'Eat dinner',
  completed: false,
  completedAt: 0,
});

newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (e) => {
  console.log('Unable to save Todo.');
});
