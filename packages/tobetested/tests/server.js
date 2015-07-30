Tinytest.add('availability of variable', function (test) {
  test.equal(typeof ToBeTested, "undefined");  // not exported, so not available from tests
  test.equal(typeof PackageToBeTested, "undefined");  // not exported, so not available from tests

  test.equal(typeof MyApp.Collections.get('ToBeTested'), "object"); // stored inside MyApp.Collections
});

Tinytest.add('availability of imported package', function (test) {
  test.equal(typeof Child, "undefined"); // not imported in tests
  test.equal(typeof Parent, "undefined"); // not exported from Parent package

  test.equal(typeof MyApp.Collections.get('Child'), "object"); // stored inside MyApp.Collections
  test.equal(typeof MyApp.Collections.get('Parent'), "object"); // stored inside MyApp.Collections
});

// By using MyApp.Collections, it's possible to replace the stored object by a stubs or a mock
// That way the package become testable
// But take care to load the wished Object inside the method, if you do it globally at the top of the file,
// then it will be loaded during the build, and not be overloaded when the test running because there is no reference
Tinytest.add('test core.js', function (test) {
  var expected = MyApp.Collections.get('Parent').findOne().name + ", " + MyApp.Collections.get('ToBeTested').findOne().name + " !!!",
      result = PackageParent.getSomething();

  test.equal(result, expected);
});
