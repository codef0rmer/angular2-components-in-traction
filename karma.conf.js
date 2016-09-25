module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],
    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',
      'node_modules/reflect-metadata/Reflect.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'systemjs.config.js', included: false, watched: false},
      {pattern: 'systemjs.config.extras.js', included: false, watched: false},
      'karma-test-shim.js',

      // transpiled application & spec code paths loaded via module imports
      {pattern: 'js/ch01/angular-template.js', included: false, watched: true},
      {pattern: 'tests/specs/ch01/angular-template-unit.js', included: false, watched: true},

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      // {pattern: appBase + '**/*.html', included: false, watched: true},
      // {pattern: appBase + '**/*.css', included: false, watched: true},

      // Paths for debugging with source maps in dev tools
      {pattern: 'js/ch01/angular-template.ts', included: false, watched: false},
      {pattern: 'js/ch01/angular-template.js.map', included: false, watched: false},
      {pattern: 'tests/specs/ch01/angular-template-unit.ts', included: false, watched: false},
      {pattern: 'tests/specs/ch01/angular-template-unit.js.map', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    // proxies: {
    //   // required for component assets fetched by Angular's compiler
    //   "/app/": appAssets
    // },

    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
