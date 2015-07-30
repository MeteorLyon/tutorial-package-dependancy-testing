Tinytest.add('availability of variable', function (test) {
  test.equal(typeof MyApp, "object"); // export via api
});

Tinytest.add('Collections get/set behaviour', function (test) {
  var expected = "me";

  MyApp.Collections.set('name', expected);

  test.equal(expected, MyApp.Collections.get('name'));
});