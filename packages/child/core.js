console.log('child/core.js');

PackageChild = {
  run: function() {
    console.log("package child, Child: ", Child.findOne());
  }
}