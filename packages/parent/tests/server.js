Tinytest.add('availability of variable', function (test) {
  test.equal(typeof Parent, "object"); // export via api
  test.equal(typeof PackageParent, "object"); // export via api
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "undefined"); // not imported in tests
});

// I want to test methods from PackageParent but it depends on Parent collection
// How to stubs the Parent collections ?
// Actually my redefinition of Parent inside the Tinytest is not used by PackageParent
Tinytest.add('test core.js', function (test) {
  // stubs for Parent
  Parent = {
    "findOne": function() {
      return {
        "name": "testParentPackage",
        "date": new Date(),
        "stubs": "oh yes"
      }
    }
  };

  var result = PackageParent.lambdaParent();

  test.equal(result.name, Parent.findOne().name);
});