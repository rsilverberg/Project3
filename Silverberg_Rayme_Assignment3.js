//Rayme Silverberg
//SDI 01MDVB
//Assignment 2

alert("It was a dark and stormy night. You approach a mysterious alley...");//Start

var myName = prompt("What is your name?", "");//Setting my string variable
var myAge = parseInt(prompt("What is your age?",""));// Setting number variable
var areYouScared = confirm("Are you scared " + myName + " ?");//Setting my boolean variable
var myPrompt = prompt("What are you afraid of?", "");//setting my string variable

var dragon  = {"Type": "Dragon", "Attack": "blow fire at you"};
var vampire  = {"Type": "Vampire", "Attack": "suck your blood"};
var poltergeist  = {"Type": "Poltergeist", "Attack": "haunt you"};
var zombie  = {"Type": "Zombie", "Attack": "bite you"};
var chtulu  = {"Type": "Chtulu", "Attack": "drown you"};
var monsterArray = [dragon, vampire, poltergeist, zombie, chtulu]; // an array with 5 elements

function yourFears(args) {// function for procedure
    if (args==="monsters" || args==="zombies" || args==="vampires") {//argument conditional
        console.log("Monsters arent real?");//output 1
    } else {
        var hearNoise = confirm("Did you hear that noise just now?");// output 2
        if (hearNoise === true) {// nested conditional
            console.log("Things are not always what they seem...");//output 3
        } else {
            console.log("Your senses decieve you...");//outout 4
        }
    }
}

yourFears(myPrompt);// invoking procedure

var walkDownAlley = confirm("Are you ready to proceed through the alley?");// confirm boolean

function theWalk(args, args2) {//boolean function
    var readyToWalk = args; //local variable 1
    var stepsToTake = args2;//local variable 2 
    while (stepsToTake >= 0){// while loop set up
        if (stepsToTake === 0) {//comparison
            console.log("You have no more steps to take! You have survived the journey through the creepy alley.");//output 1
        }else{
            console.log("You have "+ stepsToTake + " steps to take.");//output 2
        }
        stepsToTake--;//part of while loop
    }
    return true;// return boolean
}

function totalMonstersRemaining(args) {
    return args.length
}

function howManyMonsters(args,args2) {//number function
    var theMonsterArray = args2;//local variable 1
    var numMonsters = theMonsterArray.length;// local variable 2
    console.log("You must fight your way out of the alley!"); // output 1
    for(numMonsters; numMonsters > 0; numMonsters--){// for loop set up
        var remainingMonsters = numMonsters - 1; // math
        var currentMonster = theMonsterArray.pop();
        console.log("A " + currentMonster["Type"] + " arrives to seal your fate. It attempts to " + currentMonster["Attack"] + ".");
        for(numPunches = 1; numPunches <= numMonsters; numPunches++){
            console.log("You have punched the monster " + numPunches +" times.");
        }
        console.log("The Monster is down!");
    }
    var totalMonstersRemaining = totalMonstersRemaining(theMonsterArray);
    console.log("There are " + totalMonstersRemaining + " monsters remaining.You have succesfully defeated the monsters! Congratulations.");

    return theMonsterArray;// return array
}


function theString(args, args2) {// string function
    var name = args;// local variable 1
    var fearType = args2;//local variable 2
    return (name + " the " + fearType + " are in your head! Concentrate on escaping your mind...");// return string, with concatonation
}

var reachedSafety = theWalk(walkDownAlley, 20);// return value 1

var monstersLeft = howManyMonsters(5, monsterArray);// return value 2

console.log(theString(myName, myPrompt));//returning and outputting return value 3

console.log("It is " + reachedSafety + " that you have reached safety, with " + monstersLeft + " monsters left.");//finish and output value 1 and 2