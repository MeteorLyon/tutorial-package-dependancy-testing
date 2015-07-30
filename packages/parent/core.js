// main object exported by package.js
PackageParent = {
  lambdaChild: function() {
    var Child = MyApp.Collections.get('Child');

    return Child.findOne();
  },

  lambdaParent: function() {
    var Parent = MyApp.Collections.get('Parent');

    return Parent.findOne();
  },

  run: function() {
    var Parent = MyApp.Collections.get('Parent');

    console.log("package parent, Parent:", Parent.findOne());

    try {
      console.log("package parent, Child: ", Child.findOne());
    } catch(e) {
      console.error("package parent, Child unavailable");
    }
  }
};
