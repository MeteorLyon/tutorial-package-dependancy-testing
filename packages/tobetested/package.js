var ToBeTestedPackage = {
  'mode': 'start'
};

Package.describe({
  name: 'tobetested',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['parent', 'underscore']);
  api.addFiles(['collections.js', 'core.js', 'main.js']);

  // Take Care, if you don't export a global variable, you won't be able to redefine anything, so code depending on it
  // will be difficult to test. Here we decided to export ToBeTested
  // It would be GREAT if we could export only for test environment !, I don't want to expose the variable, but i want
  // to allow stubs / mock for that variable ...
  api.export('ToBeTested');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['child', 'parent', 'tobetested'], 'server');
  api.addFiles(['tests/stubs.js', 'tests/server.js'], 'server');
});
