const personalizedMessage = () => 'Greetings in Personalized Message'

function PersonArrowfunction1 (name, ownMessage){
    this.name = name
    this.launchMessage = () => ownMessage
}

function PersonArrowfunction2 (name, ownMessage){
    this.name = name
    this.launchMessage = ownMessage
}

function PersonNormalFunction (name, ownMessage){
    this.name = name
    this.launchMessage = function () {
        return ownMessage
    } 
}
let personNormalFunction = new PersonNormalFunction("jose", "Greetins normal function")
let personArrowfunction1 = new PersonArrowfunction1("Jhon", "Greetins arrow function 1")
let personArrowfunction2 = new PersonArrowfunction2("Jhon", personalizedMessage )

console.log(personNormalFunction.launchMessage())

console.log (personArrowfunction1.launchMessage())

console.log (personArrowfunction2.launchMessage())