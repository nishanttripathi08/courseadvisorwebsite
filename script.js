"use strict";
function updateProgress(current, total) {
    const percent = Math.round((current / total) * 100);

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent = percent + "%";
}



