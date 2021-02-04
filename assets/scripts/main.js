// main.js

const volumeNum = document.getElementById("volume-number");
const volumeSlider = document.getElementById("volume-slider");
const volumeImage = document.getElementById("volume-image");
const soundImage = document.getElementById("sound-image");
const audioSelection = document.getElementById("audio-selection");
const hornSound = document.getElementById("horn-sound");
const honkButton = document.getElementById("honk-btn");
const partyForm = document.getElementById("party-horn-form");

function syncVolume(volume) {
    volumeSlider.value = volume;
    volumeNum.value = volume;
    if(1 <= volume && volume <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(34 <= volume && volume <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(67 <= volume && volume <= 100) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("honk-btn").disabled = true;
    }
};


function radio() {
    if(document.getElementById("radio-air-horn").checked == true) {
        soundImage.src = "./assets/media/images/air-horn.svg";
        hornSound.src = "./assets/media/audio/air-horn.mp3";
    }
    else if(document.getElementById("radio-car-horn").checked == true) {
        soundImage.src = "./assets/media/images/car.svg";
        hornSound.src = "./assets/media/audio/car-horn.mp3";
    }
    else if(document.getElementById("radio-party-horn").checked == true) {
        soundImage.src = "./assets/media/images/party-horn.svg";
        hornSound.src = "./assets/media/audio/party-horn.mp3";
    }
};


function playSound(event) {
    event.preventDefault();
    const sound = document.getElementById("horn-sound");
    sound.volume = volumeNum.value / 100;
    sound.play();
};

volumeNum.addEventListener("change", () => syncVolume(volumeNum.value));
volumeSlider.addEventListener("input", () => syncVolume(volumeSlider.value));
audioSelection.addEventListener("input", radio);
partyForm.addEventListener("submit", playSound);