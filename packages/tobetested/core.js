PackageToBeTested = {
  run: function() {
    _.extend(PackageParent, {
      getSomething: function() {
        var curParent = Parent.findOne(),
          curTested = ToBeTested.findOne();

        if (!curParent) throw new Meteor.Error(1001, "no parent found");

        return curParent.name + ", " + curTested.name + " !!!";
      }
    });

    console.log("package tobetested, ToBeTested: ", ToBeTested.findOne());

    try {
      console.log("package tobetested, Parent: ", Parent.findOne());
    } catch(e) {
      console.error("package tobetested, Parent unavailable");
    }

    try {
      console.log("package tobetested, Child: ", Child.findOne());
    } catch(e) {
      console.error("package tobetested, Child unavailable");
    }
  }
};
