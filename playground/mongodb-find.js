// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c0fb14137985b30e8c99527'),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, error => console.log('Unable to fetch todos.', error));

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, error => console.log('Unable to count todos.', error));

  db.collection('Users').find({ name: 'James' }).count().then((count) => {
    console.log(`Users with James: ${count}`);
  }, error => console.log('Cannot count users.', error));

  db.collection('Users').find({ name: 'James' }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, error => console.log('Cannot count users.', error));
  // client.close();
  return true;
});
