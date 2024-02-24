const personalizedMessage = () => 'Greetings in Personalized Message'

const PersonContructorArrowfunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})


const personConstructorArrowfunction = PersonContructorArrowfunction('jessika', personalizedMessage)

console.log(personConstructorArrowfunction.launchMessage())
console.log(personConstructorArrowfunction.name)