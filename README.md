The scripts illustrate possible optimization of mongo query which relies on lookups and grouping.

Requirements:
1) MongoDb installed and running on port 27017 (default mongo port)
2) Created database testDb

Steps to perform tests:
1) mongo setup_testData.js (to create test dataset)
2) mongo non_optimized_query.js 
3) mongo optimized_query.js 
