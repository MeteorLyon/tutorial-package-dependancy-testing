console.log('child/main.js');

Meteor.startup(function() {
  console.log('child/main.js::startup');

  var Child = MyApp.Collections.get('Child');

  if (!Child.find().count()) {
    Child.insert({"package": "child data", "date": new Date()});
  }

  PackageChild.run();
});
