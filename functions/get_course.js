exports = function(arg){
  ///*
    //Accessing application's values:
    var x = context.values.get("value_name");

    //Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    collection.findOne({ owner_id: context.user.id }).then((doc) => {
      // do something with doc
    });

    // To call other named functions:
    var arg1 = 0;
    var arg2 = 1;
    //var result = context.functions.execute("function_1", arg1, arg2);
    result = {
      'error': 0
    };

    //Try running in the console below.
  //*/
  return {arg: arg, result: result};
};