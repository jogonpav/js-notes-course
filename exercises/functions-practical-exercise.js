//Create PowerpuffGirls objets
function PowerfullGirls(name, color, superpower){
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayInfo = function (){
        console.log(`Powerpuff Girl information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower} 
        ${this.isLeader? 'Leader: Yes':'Leader: No'}
        `)
    }
    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} has becamo the leader of the powerpuff girls!`)
    }
}



const blossom = new PowerfullGirls('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerfullGirls('Buttercup', 'Green', 'Super Strength')
const bubbles =  new PowerfullGirls('Bubbles', 'Blue', 'Flight')


blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader()

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();