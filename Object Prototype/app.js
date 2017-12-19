var person = require('./person');
var ram = Object.create(person);
ram.firstname = "ram";
ram.lastname = "raghu";
ram.greet();

var shiva = Object.create(person);
shiva.firstname = "shiva";
shiva.lastname = "ram";
shiva.greet();