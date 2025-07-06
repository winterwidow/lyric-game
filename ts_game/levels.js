// game levels: each level is an album

const levels = [
    {
        album: "Debut",
        background: "assests/backgrounds/debut.png",
        correctLyrics: [
            "A few years had gone and come around", //marys song
            "When you think happiness I hope you think that little black dress", //tim mcgraw
            "He's the song in the car I keep singing Don't know why I do", //teardrops on my guitar
            "That you cry, but you don't tell anyone That you might not be the golden one" //tied together with a smile
            
        ],
        decoys: [
            "I am not the kind of girl who should be rudely barging in", //speak now
            "All the drama queens taking swings", //call it what you want
            "I wounded the good and I trusted the wicked" //daylight
        ],
        trinkets:[
            "assests/trinkets/debut/handwritten note.png",
            "assests/trinkets/debut/cowboy hat.png"
        ],
        songClip: "assests/audio/marys song.mp3",
        totalLyrics: 4,
        totalTrinkets: 2,
        message: "SLAY QUEEN"
    },
    {
        album: "Fearless",
        background: "assests/backgrounds/fearless.jpg",
        correctLyrics: [
            "I'm no one special, just another wide-eyed girl", //superstar
            "And I remember the slammin' door and all the things that I misread", //the other side of the door
            "'Cause one second it was perfect, now you're halfway out the door", // forever and always
            "He knelt to the ground and pulled out a ring" //love story
        ],
        decoys: [
            "Sanctimoniously performing soliloquies I'll never see", //but daddy i love him
            "I see your profile and your smile on unsuspecting waiters", //is it over now
            "Life is emotionally abusive" //snow on the beach
        ],
        trinkets: [
            "assets/trinkets/fearless/lucky_penny.png",
            "assets/trinkets/fearless/13.png"
        ],
        songClip: "assests/audio/love story.mp3",
        totalLyrics: 4,
        totalTrinkets: 2,
        message: "YASSSS QUEEN"
    },
    /*{
        album: "Speak Now",
        background: "assests/backgrounds/speaknow.jpg",
        correctLyrics: [
            "You made a rebel of a careless man's careful daughter",//mine
            "I'm not a princess, this ain't a fairy tale", //white horse
            "Take pictures in your mind of your childhood room" //never grow up
        ],
        decoys: [
            "Everything comes out teenage petulance", //down bad
            "I'm only seventeen, I don't know anything",//betty 
            "Fighting in only your army, frontlines, don't you ignore me" //you're losing me
        ],
        trinkets: [
            "assests/trinkets/speak_now/purple_glitter_heart.png",
            "assests/trinkets/speak_now/enchanted_perfume.png",

        ],
        songClip: "assests/audio/enchanted.mp3",
        totalLyrics: 3,
        totalTrinkets: 2,
        message: "YOU'RE A TRUE SWIFTIE"
    },
    {
        album: "Red",
        background: "assests/backgrounds/red.jpg",
        correctLyrics: [
            "Just twin fire signs, four blue eyes", //state of grace
            "What a sad beautiful tragic love affair", //sad beautiful tragic
            "Two headlights shine through the sleepless night", //treacherous
            "Mr. Superior Thinkin' Do you have all the space that you need?" //i bet you think abt me
        ],  
        decoys: [
            "And you should think about the consequence of you touching my hand in the darkened room",//gorgeous
            "He said, I'm not a donor but I'd give you my heart if you needed it",//manuscript
            "You're the only one of you baby, that's the fun of you" //me!
        ],
        trinkets: [
            "assests/trinkets/red/red_scarf.png",
            "assests/trinkets/red/heart_shaped_sunglasses.png",
        ],
        songClip: "assests/audio/sad beautiful tragic.mp3",
        totalLyrics: 4,
        totalTrinkets: 2,
        message: "Slaying so hard"
    },
    {
        album: "1989",
        background: "assests/backgrounds/1989.jpg",
        correctLyrics: [
             "His hands are in my hair, his clothes are in my room", //wildest dreams
             "Struggled through the night with someone new", //this love
             "Haven't you heard what becomes of curious minds?", //i know places
             "Your new girl is my clone" //is it over now
        ],
        decoys: [
               "All that time you were throwin' punches, I was buildin' somethin'", //thank you almee
               "I got cursed like Eve got bitten", //propehcy
               "I'm damned if I do give a damn what people say" //lavender haze
        ],
        trinkets: [
            "assests/trinkets/1989/vintage_camera.png",
            "assests/trinkets/1989/.png", //some new york symbol
            "assests/trinkets/1989/seagull.png"
        ],
        songClip: "assests/audio/wildest dreams.mp3",
        totalLyrics: 4,
        totalTrinkets: 3,
        message: "YES! You nailed it 💜"
    },
    {
        album: "Reputation",
        background: "assests/backgrounds/reputation.jpg",
        correctLyrics: [
            "Made your mark on me, a golden tattoo", //dress
            "You know I'm not a bad girl, but I do bad things with you", //so it goes
            "I once was poison ivy, but now, I'm your daisy", //dont blame me
            "I'm laughing with my lover, makin' forts under covers"//call it what you want
        ],
        decoys: [
            "Wait 'til you see half the things that haven’t happened yet", //i can see you
            "I'm wonderstruck, blushin' all the way home", //enchanted
            "And what seemed like fate, give it ten months and you'll be past it" //us
        ],
        trinkets: [
            "assests/trinkets/reputation/snake_ring.png",
            "assests/trinkets/reputation/newspaper_clippings.png",
            "assests/trinkets/reputation/snake.png" //snake from the rep tour
        ],
        songClip: "assests/audio/dancing with our hands tied.mp3",
        totalLyrics: 4,
        totalTrinkets: 3,
        message: "Taylor would be so proud"
    },
    {
        album: "Lover",
        background: "assests/backgrounds/lover.jpg",
        correctLyrics: [
            "This ultraviolet morning light below tells me this love is worth the fight", //afterglow
            "I've got a hundred thrown-out speeches I almost said to you", //archer
            "Back when we were card sharks, playing games I thought you were leading me on"//cornelia street
        ],
        decoys: [
            "Privacy sign on the door And on my page and on the whole world",//paris
            "The autumn chill that wakes me up", //marjorie
            "And here's to you 'Cause forgiveness is a nice thing to do" //this is why we cant have ncie things
        ],
        trinkets: [
            "assests/trinkets/lover/rainbow flag.png",
            "assests/trinkets/lover/archer.png", //for archer song
            "assests/trinkets/lover/heart_balloon.png"
        ],
        songClip: "assests/audio/paper rings.mp3",
        totalLyrics: 3,
        totalTrinkets: 3,
        message: "You are a true Swiftie"
    },
    {
        album: "Folklore",
        background: "assests/backgrounds/folklore.jpg",
        correctLyrics: [
            "Drunk as they watch my shattered edges glisten", //mirrorball
            "Keep your helmet, keep your life, son", //epiphany
            "You knew you won so what's the point of keeping score?", //hoax
            "With my calamitous love and insurmountable grief" //the lakes
        ],
        decoys: [
            "I'm always waiting for you just to cut to the bone",//cruel summer
            "Somеone told me, There's no such thing as bad thoughts, only your actions talk", //guilt as sin
            "Wonderin' if I dodged a bullet Or just lost the love of my life" //i dont wanna live forever
        ],
        trinkets: [
            "assests/trinkets/folklore/piano.png", 
            "assests/trinkets/folklore/cottage.png", //cottage for the 1 from eras tour
            "assests/trinkets/folklore/mirrorball.png" 
        ],
        songClip: "assests/audio/peace.mp3",
        totalLyrics: 4,
        totalTrinkets: 3,
        message: "Slay"
    },
    {
        album: "Evermore",
        background: "assests/backgrounds/evermore.jpg",
        correctLyrics: [
            "You know that my train could take you home anywhere else is hollow", //willow
            "She would've made such a lovely bride, What a shame she's fucked in the head", //champagne problems
            "The snaps from the same little breaks in your soul",//its time to go
            "So yeah, it's a war It's the goddamn fight of my life And you started it", //ivy
            "Hustlin' for the good life, never thought I'd meet you here", //cowboy like me
            "Hey, December Guess I'm feeling unmoored" //evermore
        ],
        decoys: [
            "So I did my best to lay to rest all of the bodies that have ever been on my body",//florida
            "So they set my life in flames, I regret to say, Do you believe me now?",//cassandra
            "Is it really your anxiety that stops you from giving me everything" //renegade
        ],
        trinkets: [
            "assests/trinkets/evermore/willow_tree.png", //for willow 
            "assests/trinkets/evermore/gold_ball.png", //from willow performance
            "assests/trinkets/evermore/champagne_glass.png" //for champagne problems
        ],
        songClip: "assests/audio/willow.mp3",
        totalLyrics: 6,
        totalTrinkets: 3,
        message: "LETS GOOOO"
    },
    {
        album: "Midnights",
        background: "assests/backgrounds/midnights.jpg",
        correctLyrics: [
            "Do I really have to chart the constellations in his eyes?", //high infidelity
            "The mark thеy saw on my collarbone, the rust that grew bеtween telephones",//maroon
            "I thought the plane was goin' down, how'd you turn it right around?",//labryinth
            "if it feels like a trap, you're already in one" //dear reader
        ],
        decoys: [
            "Aquamarine, moonlit swimmin' pool", //slut
            "No one in my small town thought I'd meet these suits in L.A.", //clara bow
            "My heart, my hips, my body, my love, Tryna find a part of me that you didn't touch",//death by a thousand cuts
            "Stop checkin' your mailbox for confessions of love" //foolish one
        ],
        trinkets: [
            "assests/trinkets/midnights/clock.png", //points at 12 for midnight
            "assests/trinkets/midnights/glitter_purple_blood.png", //from anti hero mv
        ],
        songClip: "assests/audio/youre_on_your_own.mp3",
        totalLyrics: ,
        totalTrinkets: 3,
        message: "ONE MORE LET'S GO"
    },
    {
        album: "The Tortured Poets Department",
        background: "assests/backgrounds/ttpd.jpg",
        correctLyrics: [
            "You have no room in your dreams for regrets", //robin
            "Can we watch our phantoms like watching wild horses?", //chloe,sam,sophia,marcus
            "Now, pretty baby, I'm runnin' back home to you", //fresh out the slammer 
            "I would've died for your sins, instead, I just died inside", //smallest man
            "With a quite bewitching face Splendidly selfish, charmingly helpless", //the bolter
            "You shit-talked me under the table Talkin' rings and talkin' cradles", //loml
            "How the death rattle breathing Silenced as the soul was leaving" //how did it end
        ],
        decoys: [
            "Soldier down on that icy ground Looked up at me with honor and truth", //great war
            "I've been Miss Misery since your goodbye", //perfectly fine
            "You can hear it in the silence, You can feel it on the way home", //you are in love
            "And don't you worry your pretty little mind People throw rocks at things that shine" //ours
        ],
        trinkets: [
            "assests/trinkets/ttpd/typewriter.png",
            "assests/trinkets/ttpd/ufo.png", //down bad eras performance
        ],
        songClip: "assests/audio/prophecy.mp3",
        totalLyrics: 7,
        totalTrinkets: 2,
        message: "YOU DID IT!!!"
    }*/
]
