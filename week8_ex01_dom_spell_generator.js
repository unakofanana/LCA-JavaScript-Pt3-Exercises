// Elements
const spellArea = document.getElementById("spellArea");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const ingredients = document.querySelectorAll("#ingredientsList li");

// Random color function
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Generate spell
generateButton.addEventListener("click", function () {

    let count = 3;

    const countdown = setInterval(function () {

        spellArea.textContent = count;

        count--;

        if (count === 0) {

            clearInterval(countdown);

            const randomIndex =
                Math.floor(Math.random() * ingredients.length);

            const spell =
                ingredients[randomIndex].textContent;

            spellArea.textContent =
                "Magic Spell: " + spell;

            spellArea.style.backgroundColor =
                randomColor();
        }

    }, 1000);
});

// Reset
resetButton.addEventListener("click", function () {

    spellArea.textContent = "";

    spellArea.style.backgroundColor = "";
});