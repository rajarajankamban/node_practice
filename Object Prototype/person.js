// function person(){
//     this.firsname = "first name";
//     this.lastname = "last name";
//     this.greet = function(){
//         console.log(`First name : ${this.firsname} Last name : ${this.lastname}`);
//     }
// }

// Instead of using function to create an object.
// We can use object prototype Object.create

var person = {
    firstname : '',
    lastname : '',
    greet : function(){
        console.log(`First name : ${this.firstname} Last name : ${this.lastname}`);
    }
}

module.exports = person;