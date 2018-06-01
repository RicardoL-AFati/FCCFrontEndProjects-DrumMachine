const keyCodes = {
    81: ["Q", "Crow Caw"],
    87: ["W", "Dog Bark"],
    69: ["E", "Elephant Trumpet"],
    65: ["A", "Hawk Screech"],
    83: ["S", "Lion Roar"],
    68: ["D", "Owl Hoot"],
    90: ["Z", "Parrot Screech"],
    88: ["X", "Rooster Crow"],
    67: ["C", "Sheep Baa"]
}


function playPressedPad(e) {
   const keyCode = e.keyCode;
   let letter,
       animalSound;

   if (keyCodes.hasOwnProperty(keyCode)) {
       letter = keyCodes[keyCode][0];
       animalSound = keyCodes[keyCode][1];
   } else {return};
   
   const audio = document.querySelector("audio[id=" + letter + "]");
   const letterDiv = document.querySelector("div[id=" + "'" + animalSound + "'" + "]");
   audio.currentTime = 0;
   audio.play();

   const display = document.querySelector("#display");
   display.textContent = animalSound;

   letterDiv.classList.add('playing');
}

function playClickedPad() {
    let letter = this.textContent,
        animalSound = this.getAttribute("id");

    const audio = document.querySelector("audio[id=" + letter + "]");
    audio.currentTime = 0;
    audio.play();

    const display = document.querySelector("#display");
    display.textContent = animalSound;

    this.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

const drumPads = document.querySelectorAll('.drum-pad');
drumPads.forEach(pad => pad.addEventListener("transitionend", removeTransition));
drumPads.forEach(pad => pad.addEventListener("click", playClickedPad));

window.addEventListener('keydown', playPressedPad);