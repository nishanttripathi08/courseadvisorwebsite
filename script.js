"use strict";

class Question {

    constructor(question, correct_answer, incorrect_answer_one, incorrect_answer_two, incorrect_answer_three, image) {
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answer_one = incorrect_answer_one;
        this.incorrect_answer_two = incorrect_answer_two;
        this.incorrect_answer_three = incorrect_answer_three;
        this.image = image;
    }

}

const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const questionText = document.getElementById("question");
const selectedCourse = document.getElementById("selectedCourse");
const questionNumberText = document.getElementById("questionNumber");
var imageSource = document.getElementById("image");

selectedCourse.addEventListener("change", updateButtonBasedOnCourse);
buttonOne.addEventListener("click", buttonPressed);
buttonTwo.addEventListener("click", buttonPressed);
buttonThree.addEventListener("click", buttonPressed);
buttonFour.addEventListener("click", buttonPressed);

const CS312or314Qs = [];
const APCSAorCS3Qs = [];

CS312or314Qs.push(new Question("How confident are you in CS?", "Very", "A little", "Barely", "None", "images/cs312.webp"));
CS312or314Qs.push(new Question("Do you know what an if statement is?", "Yes", "Maybe", "Somewhat", "No"));

APCSAorCS3Qs.push(new Question("Do you like CS?", "Yes", "No", null, null));
APCSAorCS3Qs.push(new Question("Did you get an A in CS1?", "Very", "A little", "Barely", "None"));

var currentQuestionArray = CS312or314Qs;
var currentQuestionNumber = 1;

function updateProgress(current, total) {
    const percent = Math.round((current / total) * 100);
    document.getElementById("progress-bar").style.width = percent + "%";
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
    updateProgress(0, 1);
}

function assignTextToButton(questionArray, questionNumber) {
    questionText.textContent = questionArray[questionNumber - 1].question;
    buttonOne.textContent = questionArray[questionNumber - 1].correct_answer;
    buttonTwo.textContent = questionArray[questionNumber - 1].incorrect_answer_one;
    buttonThree.textContent = questionArray[questionNumber - 1].incorrect_answer_two;
    buttonFour.textContent = questionArray[questionNumber - 1].incorrect_answer_three;
    buttonThree.style.display = (buttonThree.textContent == "") ? "none" : "block";
    buttonFour.style.display = (buttonFour.textContent == "") ? "none" : "block";
    imageSource.src = (questionArray[questionNumber - 1].image == null) ? "" : questionArray[questionNumber - 1].image ;
    currentQuestionArray = questionArray;
    currentQuestionNumber = 1;
}  

function buttonPressed() {
    //Add code that keeps track of some score or something to decide if user should take option A or option B class
    assignTextToButton(currentQuestionArray, currentQuestionNumber + 1);
    updateProgress(currentQuestionNumber, currentQuestionArray.length);
    currentQuestionNumber += 1;
    questionNumberText.textContent = currentQuestionNumber + "."
}
