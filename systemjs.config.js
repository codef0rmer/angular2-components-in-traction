/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'ch01':                       '../js/ch01',
    'ch02':                       '../js/ch02',
    'ch03':                       '../js/ch03',
    'ch04':                       '../js/ch04',
    'ch05':                       '../js/ch05',
    '@angular':                   '../node_modules/@angular',
    'angular2-in-memory-web-api': '../node_modules/angular2-in-memory-web-api',
    'rxjs':                       '../node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'ch01':                       { main: '*.js', defaultExtension: 'js' },
    'ch02':                       { main: '*.js', defaultExtension: 'js' },
    'ch03':                       { main: '*.js', defaultExtension: 'js' },
    'ch04':                       { main: '*.js', defaultExtension: 'js' },
    'ch05':                       { main: '*.js', defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);