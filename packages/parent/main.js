Meteor.startup(function() {
  if (!Parent.find().count()) {
    Parent.insert({"package": "parent data", "date": new Date()});
  }

  PackageParent.run();
});
