const personExampleLexical = {
    name: 'Juan',
    talk: function() {
        setTimeout(() => {
            console.log('Inside the setTimeout: I am... ' + this.name); //Correct: this.name is 'Juan'
        }, 1000);
        setTimeout(function() {
            console.log('Hola, soy ' + this.name); // Error: this.name is undifined
          }, 1000);
        const arrowFunction = () => {
            console.log('Outside the setTimeout: I am... ' + this.name); //Correct: this.name is 'Juan'
        };
        arrowFunction();
    },
    
    functionTalk: function () {
        console.log(`Hola, soy ${this.name}!`); //Correct: this.name is 'Juan'
    },
    arrowTalk: () => {
        console.log(`Hola, soy ${this.name}!!`); //Error: this.name is undifined
    }
};

personExampleLexical.talk();
personExampleLexical.functionTalk() //Correct: this.name is 'Juan'
personExampleLexical.arrowTalk() //Error: this.name is undifined