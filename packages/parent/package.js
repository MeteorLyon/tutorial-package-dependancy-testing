Package.describe({
  name: 'parent',
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
  api.use('child');
  api.addFiles(['collections.js', 'core.js', 'main.js']);
  api.export(['Parent', 'PackageParent']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['child', 'parent'], 'server');
  api.addFiles(['tests/stubs.js', 'tests/server.js'], 'server');
});
