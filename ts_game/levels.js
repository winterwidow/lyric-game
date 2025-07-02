// game levels: each level is an album

const levels = [
    {
        album: "Debut",
        background: "assests/backgrounds/debut.jpg",
        correctLyrics: [
            "A few years had gone and come around", "we were sitting at our favorite spot in town", "I looked at you like the stars that shine", "I'll be eighty-seven; you'll be eighty-nine"
        ],
        decoys: [
            " I was fifteen when suddenly", "Take me back to the creek beds we burned up", "The slamming of doors kissing goodbye"
        ],
        trinkets:[
            "assets/trinkets/debut/silver_locket.png",
            "assets/trinkets/debut/handwritten_note.png",
            "assets/trinkets/debut/cowboy_hat.png"
        ],
        songClip: "assests/audio/marys song.mp3",
        totalLyrics: 4,
        totalTrinkets: 3,
        message: "SLAY QUEEN"
    },
    {
        album: "Fearless",
        background: "assests/backgrounds/fearless.jpg",
        correctLyrics: [
           
        ],
        decoys: [
           
        ],
        trinkets: [
            "assets/trinkets/fearless/gold_necklace.png",
            "assets/trinkets/fearless/lucky_penny.png",
            "assets/trinkets/fearless/13.png"
        ],
        songClip: "assests/audio/fearless.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "YASSSS QUEEN"
    },
    {
        album: "Speak Now",
        background: "assests/backgrounds/speaknow.jpg",
        correctLyrics: [
            
        ],
        decoys: [
            
        ],
        trinkets: [
            "assets/trinkets/speak_now/purple_glitter_heart.png",
            "assets/trinkets/speak_now/enchanted_perfume.png",
        ],
        songClip: "assests/audio/enchanted.mp3",
        totalLyrics: ,
        totalTrinkets: 2,
        message: "YOU'RE A TRUE SWIFTIE"
    },
    {
        album: "Red",
        background: "assests/backgrounds/red.jpg",
        correctLyrics: [],  
        decoys: [],
        trinkets: [
            "assets/trinkets/red/red_scarf.png",
            "assets/trinkets/red/heart_shaped_sunglasses.png",
        ],
        songClip: "assests/audio/sad beautiful tragic.mp3",
        totalLyrics: ,
        totalTrinkets: 2,
        message: "Slaying so hard"
    },
    {
        album: "1989",
        background: "assests/backgrounds/1989.jpg",
        correctLyrics: [
             "His hands are in my hair, his clothes are in my room","Struggled through the night with someone new", "Haven't you heard what becomes of curious minds?", "Your new girl is my clone"
        ],
        decoys: [
            "Say you'll remember me, standing in a white dress", "'Cause you kiss me and it's all fine","People like you always want back the love they pushed away","Stand back wasted"   
        ],
        trinkets: [
            "assets/trinkets/1989/vintage_camera.png",
            "assets/trinkets/1989/.png", //some new york symbol
            "assets/trinkets/1989/seagull.png"
        ],
        songClip: "assests/audio/wildest dreams.mp3",
        totalLyrics: 4,
        totalTrinkets: 3,
        message: "YES! You nailed it 💜"
    },
    {
        album: "Reputation",
        background: "assests/backgrounds/reputation.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/reputation/snake_ring.png",
            "assets/trinkets/reputation/newspaper_clippings.png",
            "assets/trinkets/reputation/snake.png" //snake from the rep tour
        ],
        songClip: "assests/audio/dancing with our hands tied.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "Taylor would be so proud"
    },
    {
        album: "Lover",
        background: "assests/backgrounds/lover.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/lover/rainbow flag.png",
            "assets/trinkets/lover/archer.png", //for archer song
            "assets/trinkets/lover/heart_balloon.png"
        ],
        songClip: "assests/audio/paper rings.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "You are a true Swiftie"
    },
    {
        album: "Folklore",
        background: "assests/backgrounds/folklore.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/folklore/piano.png", 
            "assets/trinkets/folklore/cottage.png", //cottage for the 1 from eras tour
            "assets/trinkets/folklore/mirrorball.png" 
        ],
        songClip: "assests/audio/peace.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "Slay"
    },
    {
        album: "Evermore",
        background: "assests/backgrounds/evermore.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/evermore/willow_tree.png", //for willow 
            "assets/trinkets/evermore/gold_ball.png", //from willow performance
            "assets/trinkets/evermore/champagne_glass.png" //for champagne problems
        ],
        songClip: "assests/audio/willow.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "LETS GOOOO"
    },
    {
        album: "Midnights",
        background: "assests/backgrounds/midnights.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/midnights/clock.png", //points at 12 for midnight
            "assets/trinkets/midnights/glitter_purple_blood.png", //from anti hero mv
        ],
        songClip: "assests/audio/youre_on_your_own.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "ONE MORE LET'S GO"
    },
    {
        album: "The Tortured Poets Department",
        background: "assests/backgrounds/ttpd.jpg",
        correctLyrics: [],
        decoys: [],
        trinkets: [
            "assets/trinkets/ttpd/typewriter.png",
            "assets/trinkets/ttpd/ufo.png", //down bad eras performance
        ],
        songClip: "assests/audio/prophecy.mp3",
        totalLyrics: ,
        totalTrinkets: 2,
        message: "YOU DID IT!!!"
    }
]
