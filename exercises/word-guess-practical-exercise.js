//The game consists of guessing a word
//This game you have attemps to guess a word
//this code is for executing in browser cosole
correctWord = "apple";

attempts = 3;

console.log(`The word has ${correctWord.length} letters`);

isWordGuessed = false

while(attempts>0 && !isWordGuessed){
    attempts = attempts - 1;
    wordInput = window.prompt("Writte a word to guess the correct word")
    
    if(wordInput.toLowerCase() === correctWord) {
        console.log("!!CONGRATULATION!!")
        console.log("You guess the hide word")
        isWordGuessed = true
    }else{
        console.log("The word was incorrect");
        console.log(`You still have ${attempts} attempts`)
    }  
}

if (attempts === 0 && !isWordGuessed){
    console.log('!!!GAME OVER!')
}