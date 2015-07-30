console.log('child/core.js');

PackageChild = {
  run: function() {
    var Child = MyApp.Collections.get('Child');
    console.log("package child, Child: ", Child.findOne());
  }
}