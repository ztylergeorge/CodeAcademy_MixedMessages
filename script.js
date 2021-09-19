/*
This file is part of the Full-Stack Software Engineering track in Codeacademy.
The goal is to output a fully randomized message consisting of three parts.
The three components of the message will be personal, relationship, and professional. 
Each component will output a random inspirational quote from each of them.
Each time it is run a new message will appear.
*/

//store the quotes
const personal = ["Self-help is the best help.",
                "The secret of getting ahead is getting started.",
                "You must have a level of discontent to feel the urge to want to grow.",
                "We are products of our past, but we don’t have to be prisoners of it."];

const relationship = [];

const professional = [];

//print random message using components of each type of quote
function printMessage() {

    console.log("Your inspirational quotes for today: ");
    console.log(`Personal Quote: ${personal[Math.random() * personal.length]}`);
    console.log(`Relationship Quote: ${relationship[Math.random() * relationship.length]}`);
    console.log(`Professional Quote: ${professional[Math.random() * professional.length]}`);
    console.log("Check back tomorrow for more quotes!");

}