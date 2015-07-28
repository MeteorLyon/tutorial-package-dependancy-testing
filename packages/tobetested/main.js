Meteor.startup(function() {
  if (!ToBeTested.find().count()) {
    ToBeTested.insert({"package": "tobetested data", "date": new Date()});
  }

  PackageToBeTested.run();
});