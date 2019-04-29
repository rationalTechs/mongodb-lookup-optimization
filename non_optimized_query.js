conn = new Mongo();
db = conn.getDB("testDb");
db = connect("localhost:27017/testDb");

var before = new Date()
db.orders.aggregate([
  {
    $lookup : {
         from: "providers",
         localField: "providerId",
         foreignField: "_id",
         as: "provider"
     }
  },
  { $unwind : "$provider" },
  { 
    $group : { 
      _id : "$provider.type",
      countByProviderName: {$sum : 1}
    },
  },
  { $out: "sumOfProvidersNonOptimizedQuery" }
])

var after = new Date()
execution_mills = after - before;
printjson("Execution time " + execution_mills + "ms")


