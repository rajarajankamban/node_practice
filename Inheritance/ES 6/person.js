'use strict';

class Person{
    constructor(){
        this.firstname = 'rajan',
        this.lastname = 'kamban'        
    }
    greet(){
        console.log(`Name : ${this.firstname} ${this.lastname}`);
    }
}

module.exports.Policeman = class Policeman extends Person{
    constructor(){
        super();
        this.badgeId = 'jsj23';
    }
}

// var police1 = new Policeman(); 
// police1.greet();