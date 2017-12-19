var Emitter =  require('./emitter');
//var Emitter =  require('events');  //Node's event utility 
var emtr = new Emitter();
var eventConfig = require('./event.config').events;
//To avoid using string which may lead to spelling mistakes. 
// Use config file to mention it.

//emtr.on('greet',function(){console.log("Greeting 1 :) ")});
emtr.on(eventConfig.GREET,function(){console.log("Greeting 1 :) ")});
emtr.on('greet',function(){console.log("Greeting 2 :) ")});

emtr.emit('greet');