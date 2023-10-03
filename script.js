const button = document.getElementById("roll_dice");
console.log(button == null);
button.addEventListener("click", rollDice);


// function that rolls two dice by creating two random numbers and putting them onto paragraphs on the page

function rollDice(){
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("para_dice_1").innerHTML = "Value of Dice #1: " + die1;
    document.getElementById("para_dice_2").innerHTML = "Value of Dice #2: " + die2;
    document.getElementById("para_total").innerHTML = "Dice total: " + (die1 + die2);
}