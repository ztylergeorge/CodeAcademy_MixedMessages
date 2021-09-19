/*
This file is part of the Full-Stack Software Engineering track in Codeacademy.
The goal is to output a fully randomized message consisting of three parts.
The three components of the message will be personal, relationship, and professional. 
Each component will output a random inspirational quote from each of them.
Each time it is run a new message will appear.
*/

//store the quotes
const personal = [];

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