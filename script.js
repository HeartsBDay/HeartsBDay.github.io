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
let stage4Clips = [];
let stage4Index = 0;

// ===== HELPER FUNCTIONS =====
function showStage(stageNumber) {
    // hide every stage
    document.querySelectorAll('.stage').forEach(stage => {
        stage.innerHTML = ''; // mutes previous stage content
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

function shuffleArray(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderStage4Clip() {
    const clipContainer = document.getElementById("stage4ClipContainer");
    const clipURL = stage4Clips[stage4Index];
    const source = `https://www.redgifs.com/ifr/${clipURL}`;

    clipContainer.innerHTML = `
        <iframe
            src="${source}"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
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
            src="https://www.redgifs.com/ifr/bruisedsnivelingcaiman"
            frameborder="0"
            allowfullscreen
        ></iframe>

        <p>I thought this clip from Shimoneta fit us pretty well</p>
        <iframe
            src="https://www.redgifs.com/ifr/bruisedsnivelingcaiman"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
}

function loadStage2() {
    const container = document.getElementById("stage2");

    container.innerHTML = `
        <h2>What brought us together ❤️</h2>
        <p>You know I HAD to include this, right?</p>
        <p>Forever feeling blessed that I decided to post this on that specific day.</p>
        <iframe
            src="https://www.redgifs.com/ifr/murkytemptingbichonfrise"
            frameborder="0"
            allowfullscreen
        ></iframe>
    `;
}

function loadStage3() {
    const container = document.getElementById("stage3");

    container.innerHTML = `
        <h2>FANSERVICE REVIEWS</h2>
        <p>I thought it would be fun to look back at all the reviews you've done so far.</p>
        <p>A reminder of the joy you spread to everyone :]</p>

        <h3>Bathtub Scene - Harem in the Labyrinth of Another World (Episode 10)</h3>
        <a  class="review-link-button"
            href="https://www.reddit.com/user/HeartThrobGal/comments/1my1g84/fanservice_review_1_bathtub_scene_harem_in_the/"
        >Read Review ♥</a>
        <br/><br/>
        <iframe src="https://www.redgifs.com/ifr/quarterlyfalselacewing" frameborder="0" allowfullscreen></iframe>
        <br/>
        <iframe src="https://www.redgifs.com/ifr/pureslategraybobwhite" frameborder="0" allowfullscreen></iframe>
        <br/>
        <iframe src="https://www.redgifs.com/ifr/bogusharshauklet" frameborder="0" allowfullscreen></iframe>
        <br/><br/>

        <h3>Rui and Natsuo's First Time - Domestic Girlfriend (Episode 1)</h3>
        <a  
            class="review-link-button"
            href="https://www.reddit.com/user/HeartThrobGal/comments/1mzgxy0/fanservice_review_2_rui_and_natsuos_first_time/"
        >Read Review ♥</a>
        <br/><br/>
        <iframe src="https://www.redgifs.com/ifr/quaintmindlesswhitetippedreefshark" frameborder="0" allowfullscreen></iframe>
        <br/>
        <iframe src="https://www.redgifs.com/ifr/humiliatingfittingbluemorphobutterfly" frameborder="0" allowfullscreen></iframe>
        <br/><br/>

        <h3>Mio and Basara's Syrup-y Playtime - Testament of Sister New Devil (Episode 6)</h3>
        <a 
            class="review-link-button"
            href="https://www.reddit.com/user/HeartThrobGal/comments/1mztryl/fanservice_review_3_mio_and_basaras_syrupy/"
        >Read Review ♥</a>
        <br/><br/>
        <iframe src="https://www.redgifs.com/ifr/chocolatethirdagama" frameborder="0" allowfullscreen></iframe>
        <br/>
        <iframe src="https://www.redgifs.com/ifr/meagergrumpykestrel" frameborder="0" allowfullscreen></iframe>
        <br/><br/>

        <h3>Lady Lady's Session - Valkyrie Drive: Mermaid (Special Episode 5)</h3>
        <a 
            class="review-link-button"
            href="https://www.reddit.com/user/HeartThrobGal/comments/1n8ux17/fanservice_review_4_lady_ladys_session_valkyrie/"
        >Read Review ♥</a>
        <br/><br/>
        <iframe width="720" height="405" src="https://www.redgifs.com/ifr/kindheartedfavorablezenaida" frameborder="0" allowfullscreen></iframe>
        <br/><br/>

        <h3>A Loving Rescue - Nukitashi: The Animation (Episode 10)</h3>
        <a 
            class="review-link-button"
            href="https://www.reddit.com/user/HeartThrobGal/comments/1nmjb3k/fanservice_review_5_a_loving_rescue_nukitashi_the/"
        >Read Review ♥</a>
        <br/><br/>
        <iframe src="https://www.redgifs.com/ifr/nastyorganicjunebug" frameborder="0" allowfullscreen></iframe>
    `;
}

function loadStage4() {
    const container = document.getElementById("stage4");

    container.innerHTML = `
        <h2>✨ Clip Roulette ✨</h2>
        <p>Thanks for always being such a good girl for me <3</p>
        <p>Now enjoy some random clips from some of our favorites :]</p>
        <br/>
        <div id="stage4ClipContainer"></div>
        <button id="nextClipBtn">Next Clip</button>
    `;

    renderStage4Clip();

    document.getElementById("nextClipBtn").addEventListener("click", () => {
        stage4Index = (stage4Index + 1) % stage4Clips.length;
        renderStage4Clip();
    });
} 

// ===== CONTROLS =====
document.getElementById("nextStage").addEventListener("click", () => {
    currentStage = currentStage % maxStage + 1;
    showStage(currentStage);
});

document.getElementById("prevStage").addEventListener("click", () => {
    currentStage = (currentStage - 2 + maxStage) % maxStage + 1;
    showStage(currentStage);
});

// ===== INITIALIZE =====
window.onload = async () => {
    try {
        const response = await fetch('clips.json');
        const data = await response.json();
        stage4Clips = shuffleArray(data.clips);
        stage4Index = 0;
        console.log("Stage 4 clips preloaded!");
    } catch (err) {
        console.error("Failed to preload stage 4 clips:", err);
    }

    showStage(currentStage);
};

showStage(currentStage);
