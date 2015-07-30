Tinytest.add('availability of variable', function (test) {
  test.equal(typeof ToBeTested, "undefined");  // not exported, so not available from tests
  test.equal(typeof PackageToBeTested, "undefined");  // not exported, so not available from tests
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "undefined"); // not imported in tests
  test.equal(typeof Parent, "object"); // imported in tests
});

// I use test collections to remove al data and set only what i need wothout breking the dev environment
Tinytest.add('test core.js', function (test) {
  if (typeof ToBeTested == "undefined") {
    test.fail('ToBeTested is not available because not exported from current package');
    return;
  }

  // Test will not continue because ToBeTested is not defined because it's not exported by current package
  // I really don't know how to test this case where PackageParent is altered by the current package
  // but depends on variables declared only in the current package.
  setUp();

  var expectedParentName = "me",
      expectedToBeTestedName = "you",
      expected = expectedParentName + ", " + expectedToBeTestedName + " !!!";

  // insert data
  Parent.insert({"name": expectedParentName});
  ToBeTested.insert({"name": expectedToBeTestedName});

  var result = PackageParent.getSomething();

  test.equal(expected, result);
});
