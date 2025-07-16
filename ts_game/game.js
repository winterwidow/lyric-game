let currentLevel = 0;
let foundLyrics = 0;
let foundTrinkets = 0;
let currentAudio = null;
let sparkleSound = new Audio('assests/sounds/sparkle.wav');
let popSound = new Audio('assests/sounds/pop.wav');

function startLevel(levelIndex)
{
    const level = levels[levelIndex];
    
    // Check game type and start appropriate game
    if (level.gameType === "wordsearch") {
        startWordSearch(level.album);
        return;
    }
    
    // Default lyric game
    foundLyrics = 0;
    foundTrinkets = 0;

    document.getElementById('scene-background').style.backgroundImage = `url(${level.background})` //set bg
    document.getElementById('floating-area').innerHTML = ''; //clear old elements
    
    // Update album title
    document.getElementById('album-title').textContent = level.album;
    
    // Hide next level button when starting new level
    document.getElementById('next-level-btn').classList.add('hidden');
    
    // Shuffle and place all lyrics (correct + decoys) in random order
    const allLyrics = [...level.correctLyrics.map(text => ({text, isCorrect: true})), 
                       ...level.decoys.map(text => ({text, isCorrect: false}))];
    shuffleArray(allLyrics);
    
    allLyrics.forEach(lyric => {
        spawnFragment(lyric.text, lyric.isCorrect);
    });

    //place trinkets
    level.trinkets.forEach(img => {
        spawnTrinket(img);
    });

    updateCounters();

    //play song

    if(currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; //reset audio
    }
    currentAudio = new Audio(level.songClip);
    currentAudio.loop = true;
    currentAudio.volume = 0.5;
    
    // Handle audio loading and autoplay issues
    currentAudio.addEventListener('canplaythrough', () => {
        console.log(`Audio loaded successfully: ${level.songClip}`);
    });
    
    currentAudio.addEventListener('error', (e) => {
        console.warn(`Failed to load audio: ${level.songClip}`, e);
    });
    
    // Try to play audio (may fail due to autoplay restrictions)
    const playPromise = currentAudio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Audio started playing successfully');
        }).catch(error => {
            console.warn('Audio autoplay failed (user interaction required):', error);
            // Add a click-to-play button or instruction
            showMessage("Click anywhere to start the music! 🎵");
        });
    }

}

function spawnFragment(text, isCorrect)
{
    const div = document.createElement('div');
    div.classList.add('lyric-fragment');
    div.textContent = text;

    randomPosition(div); //random position on screen

    div.addEventListener('click', () => {
        if(isCorrect)
        {
            foundLyrics++;
            popSound.currentTime = 0;
            popSound.play();
            div.remove();
            updateCounters();
            showMessage("Corrrect!");
        }
        else{
            showMessage("Not the right lyrics :(");
        }
        checkCompletion();
    });

    document.getElementById('floating-area').appendChild(div);
}

function spawnTrinket(imgSrc)
{
    const img= document.createElement('img');
    img.src = imgSrc;
    img.classList.add('trinket');
    let fallbackCreated = false;
    // Handle image loading errors
    img.onerror = function() {
        if (fallbackCreated) return;
        fallbackCreated = true;
        console.warn(`Failed to load trinket image: ${imgSrc}`);
        // Create a fallback div with text instead
        const fallbackDiv = document.createElement('div');
        fallbackDiv.classList.add('trinket-fallback');
        fallbackDiv.textContent = '🎁';
        fallbackDiv.style.fontSize = '40px';
        fallbackDiv.style.cursor = 'pointer';
        randomPosition(fallbackDiv);
        fallbackDiv.addEventListener('click',() => {
            foundTrinkets++;
            fallbackDiv.remove();
            updateCounters();
            showMessage("Trinket collected!");
            sparkleSound.currentTime = 0;
            sparkleSound.play();
            checkCompletion();
        });
        document.getElementById('floating-area').appendChild(fallbackDiv);
        img.remove(); // Remove the broken image
    };
    randomPosition(img);
    img.addEventListener('click',() => {
        foundTrinkets++;
        sparkleSound.currentTime = 0;
        sparkleSound.play();
        img.remove();
        updateCounters();
        showMessage("Trinket collected!");
        checkCompletion();
    });
    document.getElementById('floating-area').appendChild(img);
}

function updateCounters()
{
    const level = levels[currentLevel];
    document.getElementById('lyric-counter').textContent = `Lyrics Found: ${foundLyrics}/${level.correctLyrics.length}`;
    document.getElementById('trinket-counter').textContent = `Trinkets Found: ${foundTrinkets}/${level.trinkets.length}`;
}

function randomPosition(ele)
{
    // Add margin to keep elements within visible screen
    const margin = 80; // pixels from edge
    const elementWidth = ele.offsetWidth || 200; // estimate width if not yet rendered
    const elementHeight = ele.offsetHeight || 50; // estimate height if not yet rendered
    
    const maxTop = window.innerHeight - margin - elementHeight;
    const maxLeft = window.innerWidth - margin - elementWidth;
    
    ele.style.top = `${margin + Math.random() * (maxTop - margin)}px`;
    ele.style.left = `${margin + Math.random() * (maxLeft - margin)}px`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function checkCompletion()
{
    const level = levels[currentLevel];
    if(foundLyrics == level.correctLyrics.length && foundTrinkets == level.trinkets.length)
    {
        showMessage(`You completed the ${level.album} era! 🫶`);
        showNextLevelButton();
    }
}

function showNextLevelButton()
{
    const nextBtn = document.getElementById('next-level-btn');
    nextBtn.classList.remove('hidden');
    // Remove all previous click listeners by cloning the node
    const newBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newBtn, nextBtn);
    // Add click event listener
    newBtn.addEventListener('click', () => {
        newBtn.classList.add('hidden');
        nextLevel();
    });
}

function nextLevel()
{
    if(currentAudio) //pause the song when going to next level
    {
        currentAudio.pause();
    }
    currentLevel += 1; //increase level
    if(currentLevel < levels.length)
    {
        startLevel(currentLevel);
    }
    else
    {
        showBirthdayEnding();
    }
}

function showMessage(msg)
{
    const box = document.getElementById('message-box');
    box.textContent = msg;
    box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 7000);
}

function showBirthdayEnding()
{
    document.getElementById('game-container').innerHTML = `
    <div class="birthday-message">
    <h1>🎉 Happy Birthday Bestie! 🎉</h1>
    <p>
        You conquered the lyric challenge (never doubted you) 💜<br><br>
        Love you to the moon and back!<br>
        Keep shining, superstar ✨
    </p>
    </div>
    `;
}

window.onload = () => {
    currentLevel = 0; // Always start from the first level
    startLevel(0);
    
    // Add click handler to allow audio to start after user interaction
    document.getElementById('game-container').addEventListener('click', () => {
        if (currentAudio && currentAudio.paused) {
            currentAudio.play().then(() => {
                console.log('Audio started after user interaction');
            }).catch(error => {
                console.warn('Still cannot play audio:', error);
            });
        }
    });
};
