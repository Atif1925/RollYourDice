var randomNums1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "images/" + "dice" + randomNums1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImg1);

var randomNums2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/dice" + randomNums2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImg2);

if(randomNums1>randomNums2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNums1 < randomNums2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw...Play Again !";
}

