PackageToBeTested = {
  run: function() {
    var Parent = MyApp.Collections.get('Parent'),
      ToBeTested = MyApp.Collections.get('ToBeTested');

    _.extend(PackageParent, {
      getSomething: function() {
        // if i don't redefine here the collections, i will still use those define in collections.js and not those from
        // stubs.js during tests
        var Parent = MyApp.Collections.get('Parent'),
          ToBeTested = MyApp.Collections.get('ToBeTested'),
          curParent = Parent.findOne(),
          curTested = ToBeTested.findOne();

        if (!curParent) throw new Meteor.Error(1001, "no parent found");

        return curParent.name + ", " + curTested.name   + " !!!";
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
