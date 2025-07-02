let currentLevel = 0;
let foundLyrics = 0;
let foundTrinkets = 0;
let currentAudio = null;

function startLevel(levelIndex)
{
    const level = levels[levelIndex];
    foundLyrics = 0;
    foundTrinkets = 0;

    document.getElementById('scene-background').style.backgroundImage = `url(${level.background})` //set bg
    document.getElementById('floating-area').innerHTML = ''; //clear old elements
    
    //place correct lyrics
    level.correctLyrics.forEach (text => {
        spawnFragment(text,true);
    });

    //place decoys
    level.decoys.forEach (text => {
        spawnFragment(text,false);
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
    currentAudio.play();

}

function spawnFragment(text, isCorrect)
{
    const div = document.createElement('div');
    div.classList.add('lyric_fragment');
    div.textContent = text;

    randomPosition(div); //random position on screen

    div.addEventListener('click', () => {
        if(isCorrect)
        {
            foundLyrics++;
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

    randomPosition(img);

    img.addEventListener('click',() => {
        foundTrinkets++;
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
    document.getElementById('lyric-counter').textContent = `${foundLyrics}/${level.correctLyrics.length}`;
    document.getElementById('trinket-counter').textContent = `${foundTrinkets}/${level.trinkets.length}`;
}

function randomPosition(ele)
{
    ele.style.top = `${Math.random()* 80}vh`;
    ele.style.left = `${Math.random()* 90}vw`;
}

function checkCompletion()
{
    const level = levels[currentLevel];
    if(foundLyrics == level.correctLyrics.length && foundTrinkets == level.trinkets.length)
    {
        showMessage(`You completed the ${level.album} era! 🫶`);
        setTimeout(nextLevel, 2500); //wait 2.5 seconds before going to next level

    }
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
    setTimeout(() => box.classList.add('hidden'), 3000);
}

function showBirthdayEnding()
{
    document.getElementById('game-container').innerHTML = `
    <h1>🎉 Happy Birthday Bestie! 🎉</h1>
    <p>
        You conquered the lyric challenge (never doubted you) 💜<br><br>
        Love you to the moon and back!<br>
        Keep shining, superstar ✨
    </p>
    `;
}

window.onload = () => {
    startLevel(0);
};
