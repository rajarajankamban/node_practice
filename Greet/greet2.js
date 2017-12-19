//constructor
function Greet(){
    this.message="Hello world";
    this.greet = function(){
        console.log(this.message);
    } 
}

module.exports = new Greet();