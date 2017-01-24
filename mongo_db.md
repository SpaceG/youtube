ADMIN

use admin

show dbs

db

show collections

CREATE USERS -


db.createUser(
  {
   user: "myAppDbUser",
   pwd: "myApp123",
   roles: ["readWrite"]
  })


db.createUser(
  {
   user: "myAppDbUser2",
   pwd: "myApp1232",
   roles: ["readWrite"]
  })


db.createUser(
  {
   user: "myAppDbUser3",
   pwd: "myApp1233",
   roles: ["readWrite"]
  })

db.createUser(
  {
   user: "myAppDbUser5",
   pwd: "myApp1235",
   roles: ["readWrite"]
  })



CREATE ADMIN - 

db.createUser(
  {
    user: "superAdmin",
    pwd: "admin123",
    roles: [ { role: "root", db: "admin" } ]
  }
)

db.user.find();
db.system.users.find();

Delete Users

db.removeUser("myAppDbUser");
db.dropUser("myAppDbUser");

db.user.find();
db.system.users.find();


----------------------------------------------------------------------------



CREATE NEW DATABASE AND INSERTS 

$ use (createbase)

$ db.testData.insert({ name: "Dagi Bee", age: 19 });


$ j = {name : "mongobasher"}
$ k = {x : 3}
$ db.testData.insert(j)
$ db.testData.insert(k)

$ db.testData.find();

Add User:
$ db.testData.insert({ name: "Dagi Bee", age: 19 });

Remove User:
$ db.testData.remove({name : "mongobasher"});



$ db.testData.find();



----------------------------------------------------------------------------

Delete Database:


$ use {Database Name}

$ db.dropDatabase()

how dbs //to list existing databases

use <dbname> //the <dbname> is the database you'd like to drop

db //should show <dbname> just to be sure I'm working with the right database

db.dropDatabase() //will delete the database and return { "dropped" : "<dbname>", "ok" : 1 }


----------------------------------------------------------------------------






$ use admin
$ show dbs
$ show collections;
$ show colelctions
$ show dbs
$ db.users.find();
$ db.sytsem.users.find();







