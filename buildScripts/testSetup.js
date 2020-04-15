// this file isn't transpiled, so must use CommonJS and ES5

// Require Babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// here: treat imports with a .css extension as an empty function
require.extensions['.css'] = function() {};

