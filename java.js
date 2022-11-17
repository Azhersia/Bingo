//Tobias kod

const numbers = [] // Array

function generateNumber() {
    const number = Math.floor(Math.random() * 75) + 1;
    //is the number in the number
    if (numbers.includes(number)) {
        return generateNumber()
    } else {
        numbers.push(number);
        return number;
    }

}


function init() {

    for (let i = 0; i < 25; i++) {
        const button = document.createElement("button"); // = <button>23</button>

        // Check if number 12 and create different button
        if (i == 12) {
            button.innerText = "🪲"
            button.classList.add("locked")
        } else {
            button.innerText = generateNumber();


            button.addEventListener("click", function () {
                // checks if has hit, if it does = remove. it dont =
                if (button.classList == "locked") {
                    button.classList.remove("locked")
                } else {
                    button.classList.add("locked");
                }

            });
        }
        // Add button to section
        document.querySelector("section").appendChild(button);
    }
}


init();






/*
               my attempt

function toggleNumber(el) {
    // Check if number is already "locked"
    if (el.classList == "locked") {
        // Remove class to element
        el.classList.remove("locked");
    } else {
        // Get parent element (div) of el (button) and get all elements inside div with class locked
        const lockedElements = el.parentElement.querySelectorAll(".locked");

        // Check if locked elements is less than 7
        if (lockedElements.length < 7) {
            // If not, lock the number by adding class to element
            el.classList.add("locked");

        }
    }
}

function generateNumbers(el) {
    // generate random number 1-40
    const randomNumber = Math.floor(Math.random() * 77) + 1
    console.log(randomNumber);
};

function createButtons() {



    const bottomSection = document.querySelector(".bottom");

    //create the 5 divs 
    for (let i = 1; i < 6; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i;

        //create 5 buttons inside each div
        for (let i = 1; i < 6; i++) {
            const newButton = document.createElement("button");
            newDiv.appendChild(newButton);
            newButton.innerText = i;

            // Set id on button
            newButton.id = "id" + newDiv.id + "-" + i;

            newButton.onclick = function () {
                toggleNumber(this);
            };

        }
        bottomSection.appendChild(newDiv);

    }

}

createButtons();
*/

