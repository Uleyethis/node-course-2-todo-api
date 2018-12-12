// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((res) => {
  //   console.log(res);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
  //   console.log(res);
  // });

  // delete many James
  // db.collection('Users').deleteMany({ name: 'James' }).then((res) => {
  //   console.log(res);
  // });

  // find one and delete id: ObjectId("5c0faf98f4b69f47804afb88")
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c0faf98f4b69f47804afb88') }).then((res) => {
    console.log(res);
  });

  // client.close();
  return true;
});
