Tinytest.add('availability of variable', function (test) {
  test.equal(typeof Parent, "object"); // export via api
  test.equal(typeof PackageParent, "object"); // export via api
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "undefined"); // not imported in tests
});

// I use test collections to remove al data and set only what i need wothout breking the dev environment
Tinytest.add('test core.js', function (test) {
  setUp();

  var expectedParentName = "me";

  // insert data
  Parent.insert({"name": expectedParentName});

  var resultParent = PackageParent.lambdaParent();
  test.equal(resultParent.name, expectedParentName);
});