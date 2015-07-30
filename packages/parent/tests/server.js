Tinytest.add('availability of variable', function (test) {
  test.equal(typeof Parent, "object"); // export via api
  test.equal(typeof PackageParent, "object"); // export via api
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "object"); // imported in tests to allow redefinition from test environment
});

// This, time everything works !
// I just have to redefine the methods of the collections findOne/find.... and all variables that point to it will
// take care of the modification. My previous mistake was link to the fact that i reaffect a new content to the variable
// So all copy of the variable was broken and still used the original object. That was a really stupid mistake !
// And don't hesitate to import sub-packages (here: Child)
Tinytest.add('test core.js', function (test) {
  var result = PackageParent.lambdaParent();
  test.equal(result.name, "testParentPackage");

  var result = PackageParent.lambdaChild();
  test.equal(result.name, "testChildPackage");
});