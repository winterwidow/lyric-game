// Word Search Game for Taylor Swift Albums

const wordSearchLevels = {
    "1989": {
        grid: [
            ['W', 'I', 'L', 'D', 'E', 'S', 'T', 'D', 'R', 'E', 'A', 'M', 'S'],
            ['O', 'V', 'O', 'L', 'C', 'T', 'M', 'O', 'O', 'Q', 'C', 'S', 'A'], 
            ['N', 'Y', 'M', 'V', 'U', 'Y', 'G', 'N', 'B', 'H', 'B', 'S', 'Y'], 
            ['D', 'T', 'L', 'O', 'S', 'L', 'U', 'T', 'I', 'S', 'B', 'I', 'D'], 
            ['E', 'P', 'N', 'M', 'X', 'E', 'Z', 'G', 'N', 'L', 'G', 'B', 'O'], 
            ['R', 'F', 'L', 'O', 'R', 'I', 'D', 'O', 'C', 'L', 'E', 'A', 'N'],
            ['L', 'O', 'V', 'V', 'R', 'S', 'B', 'F', 'R', 'T', 'V', 'P', 'T'], 
            ['A', 'U', 'G', 'E', 'S', 'T', 'A', 'J', 'A', 'M', 'E', 'S', 'G'], 
            ['N', 'E', 'W', 'R', 'O', 'M', 'A', 'N', 'T', 'I', 'C', 'S', 'O'], 
            ['D', 'R', 'E', 'S', 'S', 'T', 'H', 'E', 'M', 'A', 'N', 'O', 'N'], 
            ['U', 'I', 'S', 'I', 'T', 'O', 'V', 'E', 'R', 'N', 'O', 'W', 'U'],
            ['R', 'E', 'N', 'E', 'G', 'A', 'D', 'E', 'I', 'L', 'Y', 'A', 'M'],
            ['S', 'L', 'M', 'T', 'H', 'I', 'S', 'L', 'O', 'V', 'E', 'G', 'Q']
        ],
        words: [
            { word: "WILDESTDREAMS", found: false }, //present
            { word: "STYLE", found: false }, //present
            { word: "SLUT", found: false }, //present
            { word: "CLEAN", found: false }, //present
            { word: "THISLOVE", found: false }, //present
            { word: "NEWROMANTICS", found: false }, //present
            { word: "SAYDONTGO", found: false }, //present
            { word: "ISITOVERNOW", found: false }, //present
            { word: "WONDERLAND", found: false } //present
        ],
        background: "assests/backgrounds/1989.jpg",
        songClip: "assests/audio/wildest dreams.mp3"
    },
    "Fearless": {
        grid: [
            ['M', 'U', 'T', 'I', 'O', 'V', 'H', 'L', 'Z', 'Y', 'I', 'C', 'Y'],
            ['E', 'F', 'E', 'A', 'R', 'L', 'E', 'S', 'S', 'W', 'L', 'L', 'O'],
            ['N', 'X', 'L', 'W', 'A', 'C', 'Y', 'K', 'P', 'F', 'Y', 'O', 'U'],
            ['S', 'H', 'L', 'O', 'V', 'E', 'S', 'T', 'O', 'R', 'Y', 'S', 'A'],
            ['U', 'H', 'M', 'E', 'N', 'S', 'T', 'H', 'M', 'O', 'O', 'U', 'L'],
            ['C', 'U', 'E', 'R', 'O', 'M', 'E', 'O', 'Q', 'S', 'Y', 'R', 'L'],
            ['K', 'H', 'W', 'M', 'J', 'G', 'P', 'E', 'B', 'E', 'B', 'E', 'O'],
            ['G', 'W', 'H', 'I', 'T', 'E', 'H', 'O', 'R', 'S', 'E', 'H', 'V'],
            ['S', 'M', 'Y', 'L', 'O', 'V', 'E', 'A', 'E', 'Y', 'L', 'U', 'E'],
            ['F', 'I', 'F', 'T', 'E', 'E', 'N', 'L', 'A', 'J', 'O', 'B', 'R'],
            ['T', 'H', 'E', 'O', 'N', 'E', 'Z', 'M', 'T', 'V', 'N', 'S', 'M'],
            ['R', 'O', 'N', 'A', 'N', 'S', 'O', 'C', 'H', 'A', 'N', 'G', 'E'],
            ['I', 'N', 'N', 'O', 'C', 'E', 'N', 'T', 'E', 'P', 'G', 'V', 'X']
        ],
        words: [
            { word: "LOVESTORY", found: false },
            { word: "FEARLESS", found: false },
            { word: "BREATHE", found: false },
            { word: "FIFTEEN", found: false },
            { word: "WHITEHORSE", found: false },
            { word: "HEYSTEPHEN", found: false },
            { word: "CHANGE", found: false },
            { word: "YOUALLOVERME", found: false },
            { word: "TELLMEWHY", found: false }
        ],
        background: "assests/backgrounds/fearless.jpg",
        songClip: "assests/audio/love story.mp3"
    },
    "Evermore": {
        grid: [
            ['I', 'D', 'T', 'S', 'L', 'U', 'T', 'J', 'W', 'G', 'S', 'M', 'C'],
            ['T', 'E', 'A', 'B', 'D', 'G', 'O', 'O', 'Q', 'O', 'T', 'L', 'O'],
            ['S', 'L', 'Y', 'J', 'S', 'O', 'L', 'K', 'P', 'L', 'Y', 'B', 'N'],
            ['T', 'I', 'L', 'R', 'E', 'U', 'E', 'E', 'Z', 'D', 'L', 'E', 'E'],
            ['I', 'C', 'O', 'E', 'V', 'E', 'R', 'M', 'O', 'R', 'E', 'T', 'Y'],
            ['M', 'A', 'R', 'R', 'E', 'D', 'A', 'O', 'V', 'U', 'Y', 'T', 'I'],
            ['E', 'T', 'S', 'W', 'N', 'M', 'T', 'N', 'T', 'S', 'E', 'Y', 'S'],
            ['T', 'E', 'W', 'I', 'K', 'G', 'E', 'X', 'I', 'H', 'A', 'O', 'L'],
            ['O', 'K', 'I', 'L', 'L', 'E', 'I', 'P', 'A', 'R', 'I', 'S', 'A'],
            ['G', 'L', 'F', 'L', 'F', 'V', 'T', 'V', 'I', 'L', 'E', 'F', 'N'],
            ['O', 'J', 'T', 'O', 'C', 'A', 'R', 'D', 'I', 'G', 'A', 'N', 'D'],
            ['M', 'C', 'O', 'W', 'B', 'O', 'Y', 'L', 'I', 'K', 'E', 'M', 'E'],
            ['A', 'U', 'G', 'U', 'S', 'T', 'T', 'E', 'V', 'M', 'X', 'G', 'I']
        ],
        words: [
            { word: "EVERMORE", found: false },
            { word: "COWBOYLIKEME", found: false },
            { word: "WILLOW", found: false }, 
            { word: "ITSTIMETOGO", found: false },
            { word: "GOLDRUSH", found: false },
            { word: "TOLERATEIT", found: false },
            { word: "CONEYISLAND", found: false }
        ],
        background: "assests/backgrounds/evermore.jpg",
        songClip: "assests/audio/willow.mp3"
    }
    
};

let currentWordSearch = null;
let selectedCells = [];
let foundWords = 0;

function startWordSearch(albumName) {
    currentWordSearch = wordSearchLevels[albumName];
    foundWords = 0;
    selectedCells = [];
    
    // Set background
    document.getElementById('scene-background').style.backgroundImage = `url(${currentWordSearch.background})`;
    
    // Update album title
    document.getElementById('album-title').textContent = `${albumName} Word Search`;
    
    // Clear floating area
    document.getElementById('floating-area').innerHTML = '';
    
    // Create word search grid
    createWordSearchGrid();
    
    // Create word list
    createWordList();
    
    // Update counters
    updateWordSearchCounters();
    
    // Hide next level button
    document.getElementById('next-level-btn').classList.add('hidden');
    
    // Play music
    if(currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(currentWordSearch.songClip);
    currentAudio.loop = true;
    currentAudio.volume = 0.5;
    
    const playPromise = currentAudio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.warn('Audio autoplay failed:', error);
        });
    }
}

function createWordSearchGrid() {
    const gridContainer = document.createElement('div');
    gridContainer.id = 'wordsearch-grid';
    gridContainer.className = 'wordsearch-container';
    
    for (let row = 0; row < currentWordSearch.grid.length; row++) {
        for (let col = 0; col < currentWordSearch.grid[row].length; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = currentWordSearch.grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;
            
            cell.addEventListener('mousedown', (e) => startSelection(e, row, col));
            cell.addEventListener('mouseover', (e) => continueSelection(e, row, col));
            cell.addEventListener('mouseup', endSelection);
            
            gridContainer.appendChild(cell);
        }
    }
    
    document.getElementById('floating-area').appendChild(gridContainer);
}

function createWordList() {
    const wordList = document.createElement('div');
    wordList.id = 'word-list';
    wordList.className = 'word-list';
    
    currentWordSearch.words.forEach((wordObj, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.textContent = wordObj.word;
        wordItem.dataset.wordIndex = index;
        wordList.appendChild(wordItem);
    });
    
    document.getElementById('floating-area').appendChild(wordList);
}

function startSelection(e, row, col) {
    e.preventDefault();
    selectedCells = [{row, col}];
    highlightCell(row, col);
}

function continueSelection(e, row, col) {
    if (selectedCells.length > 0) {
        const lastCell = selectedCells[selectedCells.length - 1];
        if (lastCell.row !== row || lastCell.col !== col) {
            selectedCells.push({row, col});
            highlightCell(row, col);
        }
    }
}

function endSelection() {
    if (selectedCells.length > 1) {
        checkWord();
    }
    clearHighlights();
    selectedCells = [];
}

function highlightCell(row, col) {
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.classList.add('selected');
    }
}

function clearHighlights() {
    document.querySelectorAll('.grid-cell.selected').forEach(cell => {
        cell.classList.remove('selected');
    });
}

function checkWord() {
    const selectedWord = selectedCells.map(cell => 
        currentWordSearch.grid[cell.row][cell.col]
    ).join('');
    
    // Check both forward and backward
    const reversedWord = selectedWord.split('').reverse().join('');
    
    currentWordSearch.words.forEach((wordObj, index) => {
        if (!wordObj.found && (selectedWord === wordObj.word || reversedWord === wordObj.word)) {
            wordObj.found = true;
            foundWords++;
            
            // Highlight found word in grid
            selectedCells.forEach(cell => {
                const gridCell = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
                if (gridCell) {
                    gridCell.classList.add('found');
                }
            });
            
            // Update word list
            const wordItem = document.querySelector(`[data-word-index="${index}"]`);
            if (wordItem) {
                wordItem.classList.add('found');
            }
            
            // Play sound
            popSound.currentTime = 0;
            popSound.play();
            
            showMessage(`Found: ${wordObj.word}! 🎉`);
            updateWordSearchCounters();
            checkWordSearchCompletion();
        }
    });
}

function updateWordSearchCounters() {
    document.getElementById('lyric-counter').textContent = `Words Found: ${foundWords}/${currentWordSearch.words.length}`;
    document.getElementById('trinket-counter').textContent = `Album: ${currentWordSearch.words.length} Songs`;
}

function checkWordSearchCompletion() {
    if (foundWords === currentWordSearch.words.length) {
        showMessage(`You completed the ${document.getElementById('album-title').textContent}! 🎉`);
        showNextLevelButton();
    }
} 