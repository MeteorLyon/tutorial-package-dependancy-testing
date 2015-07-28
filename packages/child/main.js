console.log('child/main.js');

Meteor.startup(function() {
  console.log('child/main.js::startup');

  if (!Child.find().count()) {
    Child.insert({"package": "child data", "date": new Date()});
  }

  PackageChild.run();
});
