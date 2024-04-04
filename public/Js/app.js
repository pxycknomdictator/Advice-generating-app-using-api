// Selecte all html elements
const adviceNumber = document.querySelector("#advice-number");
const adviceText = document.querySelector(".advice-text");
const dice = document.querySelector(".dice-box");

const callMe = async () => {

    try {
        const url = "https://api.adviceslip.com/advice"
        const data = await fetch(url);
        const response = await data.json();
        adviceNumber.innerText = `#${response.slip.id}`;
        adviceText.innerText = `"${response.slip.advice}"`
    } catch (error) {
        console.log(error);
    }
    
}

dice.addEventListener("click", (event) => {
    let userClicked = event.target.id;

    if (userClicked === "dice-container" || userClicked === "dice-image") {
        callMe()
    }
})


