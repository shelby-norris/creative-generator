const ideas = [
    "Design and draw the ultimate treehouse",
    "Write a four sentence horror story",
    "Create a watercolor painting of a forest landscape",
    "Write a story about a new, made-up planet you discovered",
    "Redesign the game pieces for the Monopoly board game",
    "Create a collage out of old magazines",
    "Collect leaves and flowers on a walk and press them into a scrapbook",
    "List ten hilarious names for different types of pets",
    "Design a greeting card",
    "Write a limerick about a memorable stranger you encountered",
    "Create a tiny garden in an old mint tin",
    "Create 5 simple origami figures",
    "Create an illustration of yourself as a witch or wizard",
    "Write a short story about you and your pet dragon",
    "Create your own Pokemon character"
];

// Prevent repeats until all have been shown (Fisher-Yates shuffle)
// Being 100% transparent, I used ChatGPT to break these steps down for me because I found it very difficult to understand

let shuffleIdeas = [];
let currentNumber = 0;

function shuffle() {
    shuffleIdeas = ideas.slice();
    for (let i = shuffleIdeas.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = shuffleIdeas[i];
        shuffleIdeas[i] = shuffleIdeas[j];
        shuffleIdeas[j] = temp;
    }
    currentNumber = 0;
}

shuffle();

let ideaDisplay = document.getElementById("idea-box");
let ideaButton = document.getElementById("inspire-btn");

ideaButton.addEventListener("click", getRandomIdea);

function getRandomIdea(e) {
    e.preventDefault();
    if (currentNumber >= shuffleIdeas.length) {
        shuffleIdeas();
    }
    const idea = shuffleIdeas[currentNumber];
    currentNumber++;

    ideaDisplay.textContent = idea;

    ideaDisplay.classList.remove("fade-in");
    void ideaDisplay.offsetWidth;
    ideaDisplay.classList.add("fade-in");
}


