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

const relationship = ["Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.",
                    "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
                    "When you stop expecting people to be perfect, you can like them for who they are.",
                    "If you would be loved, love, and be loveable."];

const professional = ["Quality means doing it right when no one is looking.",
                    "You are not your resume, you are your work.",
                    "Every accomplishment starts with the decision to try.",
                    "Don’t confuse having a career with having a life."];

//print random message using components of each type of quote
function printMessage() {

    console.log("Your inspirational quotes for today: ");
    console.log(`Personal Quote: ${personal[Math.floor(Math.random() * personal.length)]}`);
    console.log(`Relationship Quote: ${relationship[Math.floor(Math.random() * relationship.length)]}`);
    console.log(`Professional Quote: ${professional[Math.floor(Math.random() * professional.length)]}`);
    console.log("Check back tomorrow for more quotes!");

}

printMessage();