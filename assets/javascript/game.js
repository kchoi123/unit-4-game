// CrystalsCollector Game 

// ------------------- All varibles below -------------------

// Creating varibles
var compGuess = 0;
var wins = 0;
var losses = 0;
var userNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var img1;
var img2;
var img3;
var img4;
var userTotal = 0;

// given variables
var minComp = 19;
var maxComp = 120;
var minUser = 1;
var maxUser = 12;

// ------------------- All functions below -------------------

// create random number gen from 19 - 120
function compGen() {
    do {
        randomGenerator();
    }
    while (compGuess < 19);
    $(".compGuess-text").text(compGuess);
    console.log("comp generated number: " + compGuess);
};

// write own random function to not be 0
// fix while statement
// create random number gen from 1-12
function randomGenerator() {
    compGuess = Math.ceil(Math.random() * (maxComp - minComp + 1));
}

function userGen() {
    for (var i = 0; i < 4; i++) {

    }
    
    // do {
    //     var interval = maxUser - minUser + 1;
    //     img1 = Math.floor(Math.random() * (maxUser - minUser + 1));
    //     img2 = Math.floor(Math.random() * (maxUser - minUser + 1));
    //     img3 = Math.floor(Math.random() * (maxUser - minUser + 1));
    //     img4 = Math.floor(Math.random() * (maxUser - minUser + 1));
    // }
    // while ((img1 && img2 !== img3 && img4) && (img2 && img3 !== img1 && img4) /* && (img1, img2, img3, img4 !== 0) */);
    // console.log(img1 + " " + img2 + " " + img3 + " " + img4);
};

// game win / loss result
function winLoss() {
    if (userTotal === compGuess) {
        console.log("you win")
        wins++;
        //display wins + 1
        $("#win-text").text(wins);
        reset();
    } else if (userTotal > compGuess) {
        console.log("you loser")
        losses++;
        //display losses + 1
        $("#losses-text").text(losses);
        reset();
    }
};

// reset function
function reset() {
    compGen();
    userGen();
    userTotal = 0;
    $(".userTotal").text(userTotal);
};

// calling the compGen to create a random number
compGen();
userGen();

// ------------------- click actions below -------------------

// click function for image 1
$(".img1").on("click", function () {
    userTotal += img1;
    console.log(userTotal);
    //Your total score
    $(".userTotal").text(userTotal);
    //calling the reset when the user wins
    winLoss();
});

// click function for image 2
$(".img2").on("click", function () {
    userTotal += img2;
    console.log(userTotal);
    //Your total score
    $(".userTotal").text(userTotal);
    //calling the reset when the user wins
    winLoss();
});

// click function for image 3
$(".img3").on("click", function () {
    userTotal += img3;
    console.log(userTotal);
    //Your total score
    $(".userTotal").text(userTotal);
    //calling the reset when the user wins
    winLoss();
});

// click function for image 4
$(".img4").on("click", function () {
    userTotal += img4;
    console.log(userTotal);
    //Your total score
    $(".userTotal-text").text(userTotal);
    //calling the reset when the user wins
    winLoss();
});