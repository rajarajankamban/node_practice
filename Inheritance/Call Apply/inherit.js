var util = require('util');

function person(){
    this.firstname = 'rajan',
    this.lastname = 'kamban'
}

person.prototype.greet = function(){
    console.log(`Name : ${this.firstname} ${this.lastname}`);
}

function policeman () {
    person.apply(this);
    this.badgeId = 'jsj23';
}

util.inherits(policeman,person);
var police1 = new policeman(); 
police1.greet();