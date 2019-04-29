conn = new Mongo();
db = conn.getDB("testDb");
db = connect("localhost:27017/testDb");

var before = new Date()
db.orders.aggregate([
  { 
    $group : { 
      _id : "$providerId",
      countByProvider : {$sum : 1}
    },
  },
  {
    $lookup : {
         from: "providers",
         localField: "_id",
         foreignField: "_id",
         as: "provider"
     }
  },
  { $unwind : "$provider" },
  { 
    $group : { 
      _id : "$provider.type",
      countByProviderName : {$sum : "$countByProvider"}
    },
  },
  { $out: "sumOfProvidersOptimizedQuery" }
])

var after = new Date()
execution_mills = after - before;
printjson("Execution time " + execution_mills + "ms")




