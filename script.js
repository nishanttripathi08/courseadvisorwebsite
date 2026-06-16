"use strict";

class Question {

    constructor(question, correct_answer, incorrect_answer_one, incorrect_answer_two, incorrect_answer_three) {
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answer_one = incorrect_answer_one;
        this.incorrect_answer_two = incorrect_answer_two;
        this.incorrect_answer_three = incorrect_answer_three;
    }

}

const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const questionText = document.getElementById("question");
const selectedCourse = document.getElementById("selectedCourse");


selectedCourse.addEventListener("change", updateButtonBasedOnCourse);

const CS312or314Qs = [];
const APCSAorCS3Qs = [];

CS312or314Qs.push(new Question("How confident are you in CS?", "Very", "A little", "Barely", "None"));
CS312or314Qs.push(new Question("Do you know what an if statement is?", "Yes", "Maybe", "Somewhat", "No"));

APCSAorCS3Qs.push(new Question("Do you like CS?", "Yes", "No", null, null));
APCSAorCS3Qs.push(new Question("Did you get an A in CS1?", "Very", "A little", "Barely", "None"));


function updateProgress(current, total) {
    const percent = Math.round((current / total) * 100);

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = percent + "%";
}

function updateButtonBasedOnCourse() {
    switch (selectedCourse.value) {
        case "CS 312 vs. CS 314":
            assignTextToButton(CS312or314Qs, 1);
            break;
        case "AP CSA vs. CS3":
            assignTextToButton(APCSAorCS3Qs, 1);
            break;
        default:
            alert("Error");
    } 
}

function assignTextToButton(questionArray, questionNumber) {
    questionText.textContent = questionArray[questionNumber - 1].question;
    buttonOne.textContent = questionArray[questionNumber - 1].correct_answer;
    buttonTwo.textContent = questionArray[questionNumber - 1].incorrect_answer_one;
    buttonThree.textContent = questionArray[questionNumber - 1].incorrect_answer_two;
    buttonFour.textContent = questionArray[questionNumber - 1].incorrect_answer_three;
    buttonThree.style.display = (buttonThree.textContent == "") ? "none" : "block";
    buttonFour.style.display = (buttonFour.textContent == "") ? "none" : "block";
}  
