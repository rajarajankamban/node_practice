var person = {
    firstname : 'rajan',
    greet : function(a,b){
        console.log(`Firstname : ${this.firstname} ${a} ${b}`);
    }
}

person.greet(5,2);
//borrowing and invoking a method and assigning object and passing paramters to function
person.greet.call({firstname:'raghu'},3,2); 
//passing parameter as array instead for n aruguments in call.
person.greet.apply({firstname:'google'},[4,5]);
person.greet(5,2);