"use strict";

class Question {

    constructor(options, questions) {
        this.options = options;
        this.questions = questions;
    }

}
function updateProgress(current, total) {
    const percent = Math.round((current / total) * 100);

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = percent + "%";
}

const list = [];

list.push(new Question("CS 312 vs. CS 314", ["How confident are you in CS?"]));

document.getElementById("question").textContent = list[0].questions[0];