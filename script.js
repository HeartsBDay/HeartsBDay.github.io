// ================================================================================================
// project: HeartsBDay.github.io
// created: Nov. 29, 2025
//
// This project is a birthday greeting webpage for u/HeartThrobGal. It will feature a few stages
// with different clips and messages to celebrate her special day. Why are you reading this? <3
//
// Modification History: See Git
// Program Status: In Progress
// ================================================================================================

// ===== GLOBAL VARIABLES =====
let currentStage = 1;
const maxStage = 4;

// ===== HELPER FUNCTIONS =====
function showStage(stageNumber) {
    // hide every stage
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.add('hidden');
    });

    // show selected stage
    const stageId = `stage${stageNumber}`;
    document.getElementById(stageId).classList.remove('hidden');
    loadStageContent(stageNumber);
}

function loadStageContent(stageNumber) {
    // Load content based on stage number
    switch(stageNumber) {
        case 1:
            loadStage1();
            break;
        case 2:
            loadStage2();
            break;
        case 3:
            loadStage3();
            break;
        case 4:
            loadStage4();
            break;
    }
}

// ===== MAIN CONTENT =====
function loadStage1() {
    const container = document.getElementById("stage1");

    container.innerHTML = `
        <h1>Happy Birthday, Heart! 🎉</h1>
        <p>I love you so much baby! Wishing you the best on your special day. You deserve the world!</p>
        <p>Use the arrows below to navigate.</p>

        <h2>Us 💖</h2>

        <p>"You're the perfect partner" - Gentle</p>
        <iframe
            width="720"
            height="405"
            src="https://www.redgifs.com/ifr/bruisedsnivelingcaiman"
            frameborder="0"
            allowfullscreen
        ></iframe>

        <p>I thought this clip fit us pretty well</p>
        <iframe
            width="720"
            height="405"
            src="https://www.redgifs.com/ifr/bruisedsnivelingcaiman"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
}

function loadStage2() {
    const container = document.getElementById("stage2");

    container.innerHTML = `
        <h2>Stage 2 Content</h2>
        <p>This is where stage 2 content will go.</p>
    `;
}

function loadStage3() {
    const container = document.getElementById("stage3");

    container.innerHTML = `
        <h2>Stage 3 Content</h2>
        <p>This is where stage 3 content will go.</p>
    `;
}

function loadStage4() {
    const container = document.getElementById("stage4");

    container.innerHTML = `
        <h2>Stage 4 Content</h2>
        <p>This is where stage 4 content will go.</p>
    `;
} 

// ===== CONTROLS =====
document.getElementById("nextStage").addEventListener("click", () => {
    if (currentStage < maxStage) currentStage++;
    showStage(currentStage);
});

document.getElementById("prevStage").addEventListener("click", () => {
    if (currentStage > 1) currentStage--;
    showStage(currentStage);
});

// ===== INITIALIZE =====
showStage(currentStage);
