const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

// const newTodo = new Todo({
//   text: '  Edit this video     ',
// });

// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Todo.', e);
// });

// User Model
// email - required, trimmed, type String, min length 1

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
});

const newUser = new User({
  email: '  some@email.com     ',
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save User.', e);
});
