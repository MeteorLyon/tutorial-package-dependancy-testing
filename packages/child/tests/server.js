Tinytest.add('availability of variable', function (test) {
  test.equal(typeof Child, "object"); // export via api
  test.equal(typeof PackageChild, "undefined"); // not exported, so not available from tests
});
