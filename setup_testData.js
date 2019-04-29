conn = new Mongo();
db = conn.getDB("testDb");
db = connect("localhost:27017/testDb");

var providersId = [new ObjectId(), new ObjectId(), new ObjectId()];

for(var i = 1; i <= 1000000; i++) {
   db.orders.save({
      name : "test" + i,
      providerId : providersId[i%3]
   });
}

db.providers.save({
   _id : providersId[0],
   name : "A",
   type : "regular"
});

db.providers.save({
   _id : providersId[1],
   name : "B",
   type : "casual"
});

db.providers.save({
   _id : providersId[2],
   name : "C",
   type : "regular"
});

cursor = db.orders.find({});
while ( cursor.hasNext() ){
   cursor.next();
}

