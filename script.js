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

CS312or314Qs.push(new Question("How comfortable are you with Java?", "Wrote multi-class OOP programs", "Mostly simple single-file programs", "Know another language, not Java", "Brand new to programming", null));
CS312or314Qs.push(new Question("What does this print?", "5 7", "6 7", "5 6", "6 6", "images/firstSetQ2.png"));
CS312or314Qs.push(new Question("Experience with recursion?", "Can write and trace it confidently", "Understand it but struggle to write it", "Heard of it, don't get it", "Never encountered it", null));
CS312or314Qs.push(new Question("What does mystery(4) return?", "24", "4", "10", "Infinite loop", null));
CS312or314Qs.push(new Question("Experience with data structures?", "Implemented linked lists, stacks, queues, trees", "Know arrays/ArrayLists only", "Heard of them, never implemented one", "No experience", null));
CS312or314Qs.push(new Question("What's the output?", "3 2", "1 2", "3 3", "2 2", "images/q6_code.png"));
CS312or314Qs.push(new Question("Big-O experience?", "Can analyze time and space complexity", "Seen it, can't really apply it", "Heard of it, don't understand it", "Never encountered it", null));
CS312or314Qs.push(new Question("What's the time complexity?", "O(n²)", "O(n)", "O(2n)", "O(log n)", "images/q8_code.png"));
CS312or314Qs.push(new Question("Time complexity of binary search?", "O(log n)", "O(n)", "O(n log n)", "O(1)", null));
CS312or314Qs.push(new Question("What does this print?", "15", "10", "5", "14", "images/q10_code.png"));
CS312or314Qs.push(new Question("How do you approach debugging?", "Systematically isolate with print/debugger", "Re-read code until something looks off", "Change things until it works", "Ask for help immediately", null));
CS312or314Qs.push(new Question("What's wrong with this code?", "i <= arr.length causes ArrayIndexOutOfBounds", "total should start at 1", "Return type should be void", "Nothing, it works fine", "images/q12_code.png"));
CS312or314Qs.push(new Question("Written unit tests before?", "Yes, written tests to verify correctness", "Heard of it, never written one", "Just run the program and check manually", "Didn't know that was a thing", null));
CS312or314Qs.push(new Question("What does this print?", "[10, 30]", "[20, 30]", "[10, 20]", "[10, 20, 30]", "images/q14_code.png"));
CS312or314Qs.push(new Question("Which is a valid linked list node class?", "class Node { int data; Node next; }", "class Node { int data; int next; }", "class Node { Node data; int next; }", "class Node { int data; }", null));
CS312or314Qs.push(new Question("How did you learn programming?", "AP CS A or structured course with projects", "Self-taught via YouTube/tutorials", "Non-Java course like AP CSP or Python", "Just starting out", null));
CS312or314Qs.push(new Question("What does this print?", "1 5", "3 5", "1 4", "3 1", "images/q17_code.png"));
CS312or314Qs.push(new Question("Readiness for DSA workload?", "Ready, fundamentals are solid", "Unsure, struggle with abstract concepts", "Prefer to solidify basics first", "Want to build confidence first", null));

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
    currentQuestionArray = questionArray;
    currentQuestionNumber = questionNumber;
    if (questionNumber - 1 == questionArray.length) {
        questionText.textContent = "You should take xyz";
        questionNumberText.textContent = "";
        buttonOne.style.display = "none";
        buttonTwo.style.display = "none";
        buttonThree.style.display = "none";
        buttonFour.style.display = "none";
    } else {
        buttonOne.style.display = "block";
        buttonTwo.style.display = "block";
        questionText.textContent = questionArray[questionNumber - 1].question;
        buttonOne.textContent = questionArray[questionNumber - 1].correct_answer;
        buttonTwo.textContent = questionArray[questionNumber - 1].incorrect_answer_one;
        buttonThree.textContent = questionArray[questionNumber - 1].incorrect_answer_two;
        buttonFour.textContent = questionArray[questionNumber - 1].incorrect_answer_three;
        buttonThree.style.display = (buttonThree.textContent == "") ? "none" : "block";
        buttonFour.style.display = (buttonFour.textContent == "") ? "none" : "block";
        imageSource.src = (questionArray[questionNumber - 1].image == null) ? "" : questionArray[questionNumber - 1].image ;
        questionNumberText.textContent = currentQuestionNumber + "."
    }
}  

function buttonPressed() {
    //Add code that keeps track of some score or something to decide if user should take option A or option B class
    assignTextToButton(currentQuestionArray, currentQuestionNumber + 1);
    if (currentQuestionNumber - 1 == currentQuestionArray.length) {
        updateProgress(1, 1);
    } else {
        updateProgress(currentQuestionNumber - 1, currentQuestionArray.length);
    }
}
