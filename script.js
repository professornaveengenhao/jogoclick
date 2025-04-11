document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("click-btn");
    const scoreDisplay = document.getElementById("score");

    button.addEventListener("click", function() {
        fetch("/click", {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            scoreDisplay.textContent = data.score;
        });
    });
});