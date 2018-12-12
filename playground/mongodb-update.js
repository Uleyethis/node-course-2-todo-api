// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c10fb5e37985b30e8c99ed8'),
  // }, {
  //   $set: {
  //     completed: 'true',
  //   },
  // }, {
  //   returnOriginal: false,
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c0fab70ec84690f50c4adc7'),
  }, {
    $set: {
      name: 'James',
    },
    $inc: {
      age: 1,
    },
  }, {
    returnOriginal: false,
  }).then((res) => {
    console.log(res);
  });

  // client.close();
  return true;
});
