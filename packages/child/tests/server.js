Tinytest.add('availability of variable', function (test) {
  test.equal(typeof MyApp, "object"); // not exported, so not available from tests
  test.equal(typeof Child, "undefined"); // export via api
  test.equal(typeof PackageChild, "undefined"); // not exported, so not available from tests

  test.equal(typeof MyApp.Collections.get('Child'), 'object'); // stored inside MyApp.Collections
});
