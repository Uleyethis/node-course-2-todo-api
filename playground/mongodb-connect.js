// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   conpleted: false,
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'James Daggett',
  //   age: 31,
  //   location: 'Markstay, ON',
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert user.', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  client.close();
});