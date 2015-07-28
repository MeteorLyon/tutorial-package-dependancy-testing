// main object exported by package.js
PackageParent = {
  lambdaChild: function() {
    return Child.findOne();
  },

  lambdaParent: function() {
    return Parent.findOne();
  },

  run: function() {
    console.log("package parent, Parent:", Parent.findOne());

    try {
      console.log("package parent, Child: ", Child.findOne());
    } catch(e) {
      console.error("package parent, Child unavailable");
    }
  }
};
