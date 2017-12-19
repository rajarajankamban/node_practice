//Module is wrapped in IIFE
//(function(exports, require, module, _filename, _dirname){})   

//using common folder name with index.js in it. Combining mutiple module into one collection
var Greet1 = require('./Greet1');
Greet1.english();
Greet1.espional();

// using same instance or sharing the single instance - Singleton pattern 
var Greet2 = require('./greet2');
Greet2.greet();
Greet2.message = "Hello Mars";
var Greet2_1 = require('./greet2'); //Node fetches the cached module
Greet2_1.greet();

//Creating mutiple object by passing the interface
var Greet3 = new require('./greet3');
var grt = new Greet3.Greet();
grt.greet();

//Revealing Module Pattern
var Greet4 = new require('./greet4');
Greet4.Greet();
