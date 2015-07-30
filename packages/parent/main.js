Meteor.startup(function() {
  var Parent = MyApp.Collections.get('Parent', Parent);

  if (!Parent.find().count()) {
    Parent.insert({"package": "parent data", "date": new Date()});
  }

  PackageParent.run();
});
