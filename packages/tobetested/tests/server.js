Tinytest.add('availability of variable', function (test) {
  test.equal(typeof ToBeTested, "undefined");  // not exported, so not available from tests
  test.equal(typeof PackageToBeTested, "undefined");  // not exported, so not available from tests
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "undefined"); // not imported in tests
  test.equal(typeof Parent, "object"); // imported in tests
});

// I want to test the code in main.js :
// check that getSomething method (added by main.js) return the right string
// this method depends on Parent collection declared in package parent and used in toBeTested package
// How to stubs Parent ?
// MeteorJs rewrite our package code using export/use/add_files api. So it seems impossible to overload the generated code
// that looks like : var Parent = Package.parent.Parent;
//
// There is a lot of solution :
// #1 Parent might be exported inside PackageParent like this : PackageParent.Collections = {Parent: Parent};
// This way i can overlod it inside my test
// #2 Because i use prefix to define my Collections, i can define a different one for the test environment
// This way i can remove/add data without modifying the dev environement
//
// But i would like to find a better way !
//
Tinytest.add('test core.js', function (test) {
  // Parent stubs that could be moved inside a tests/stubs.js
  Parent = {
    findOne: function() {
      return {
        "name": "dave"
      }
    }
  };

  // I tryed to export Parent : but it's not used by toBeTested.getSomething()
  Package.parent.Parent = Parent;

  var result = PackageParent.getSomething(),
    expected = "dave !!!";

  test.equal(expected, result);
});
