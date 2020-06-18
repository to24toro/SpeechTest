var { CONNECTION_URL, DATABASE, OPTIONS } = require("../../config/mongodb.config");
var MongoClient = require("mongodb").MongoClient;

// othello, users
var insertboard = function(db){
    return Promise.all([
        db.collection("board").insertOne({"board":[
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 2, 2, 2, 0, 1, 2, 2, 2, 3],
            [3, 2, 2, 2, 1, 0, 2, 2, 2, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 2, 2, 2, 2, 2, 2, 2, 2, 3],
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
      ]})
    ]);
};

var insertusers = function(db){
    return Promise.all([
        db.collection("users").insertMany([{
            name: "Ueda",
            password: "Ueda",
        }, {
            name: "Kento",
            password: "Kento",
        }])
    ]);
};
MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    var db = client.db(DATABASE);
    Promise.all([
      insertboard(db),
      insertusers(db)
    ]).catch((error) => {
      console.log(error);
    }).then(() => {
      client.close();
    });
  });