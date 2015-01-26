Package.describe({
  summary: "Bootstrap 3 packaged for meteor",
  version: "3.3.2",
  git: "https://github.com/pfafman/meteor-bootstrap-3.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'lib/css/bootstrap.css',
    /*'lib/css/bootstrap-theme.css',*/
    'lib/js/bootstrap.js',
    'lib/fonts/glyphicons-halflings-regular.eot',
    'lib/fonts/glyphicons-halflings-regular.ttf',
    'lib/fonts/glyphicons-halflings-regular.svg',
    'lib/fonts/glyphicons-halflings-regular.woff',
    'lib/fonts/glyphicons-halflings-regular.woff2'
  ], 'client');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pfafman:bootstrap-3');
  api.addFiles([
    'lib/css/bootstrap.css',
    /*'lib/css/bootstrap-theme.css', */
    'lib/js/bootstrap.js',
    'lib/fonts/glyphicons-halflings-regular.eot',
    'lib/fonts/glyphicons-halflings-regular.ttf',
    'lib/fonts/glyphicons-halflings-regular.svg',
    'lib/fonts/glyphicons-halflings-regular.woff',
    'lib/fonts/glyphicons-halflings-regular.woff2'
  ], 'client');
});
