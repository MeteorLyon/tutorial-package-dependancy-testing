Meteor.startup(function() {
  var ToBeTested = MyApp.Collections.get('ToBeTested');

  if (!ToBeTested.find().count()) {
    ToBeTested.insert({"package": "tobetested data", "date": new Date()});
  }

  PackageToBeTested.run();
});