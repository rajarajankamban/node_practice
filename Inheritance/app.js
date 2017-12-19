var EventEmitter = require('events');
var util = require('util');

function Greet(){
    //EventEmitter.apply(this);
    this.message = "Hello Folks";
}
//Inheriting EventEmitter to Greet prototype using util inherits

util.inherits(Greet,EventEmitter);

Greet.prototype.display = function(){
    console.log(this.message);
    this.emit('greet','hello');
}

var greet1 = new Greet();
greet1.on('greet',function(data){
    console.log('event triggered '+data);
})

greet1.display();