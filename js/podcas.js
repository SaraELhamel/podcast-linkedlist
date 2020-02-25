function newElement(launch, descrip, date, morceau, episode, tag, invite){
    // Empty Div
    var empty = document.getElementById("empty");

    // Create Div with Class newElement
    let div = document.createElement("div");
    div.setAttribute("class", "newElement");

    // Create Image
    let img = document.createElement("img")
    img.setAttribute("src", morceau);
    
    // Create h1 which is title
    let h1 = document.createElement("h1")
    h1.setAttribute("class", "title");
    let bigHeader = document.createTextNode(episode);
    h1.appendChild(bigHeader);

    // Create duration
    let duration = document.createElement("p")
    duration.setAttribute("class", "duration");

    let dur = document.createTextNode(launch);
    duration.appendChild(dur);

    // Create Time
    let time = document.createElement("span")
    time.setAttribute("class", "time");

    let dt = document.createTextNode(date);
    time.appendChild(dt);

    duration.appendChild(time);
    
    // Create description
    let description = document.createElement("p")
    description.setAttribute("class", "description");

    let dc = document.createTextNode(descrip);
    description.appendChild(dc);

    // Create InvTag
    let invtag = document.createElement("div");
    invtag.setAttribute("class", "invtag");

    // Create First p inside invtag
    let inv = document.createElement("p");
    // inv.setAttribute("class", "invit");
    let v = document.createTextNode(invite);
    inv.appendChild(v);

    // Create Second p inside invtag
    let tg = document.createElement("p");
    // tg.setAttribute("class", "tag");
    let g = document.createTextNode(tag);
    tg.appendChild(g);


    // Add All Elements to div
    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(duration);
    div.appendChild(description);

    // Add tag and invite inside invtag
    invtag.appendChild(inv);
    invtag.appendChild(tg);

    div.appendChild(invtag);
    
    // Add div to empty div
    empty.appendChild(div);

    // Add empty to Body
    document.body.appendChild(empty);


}

function addPodcast(){
    let launch = document.getElementById("launch");
    let date = document.getElementById("date");
    let episode = document.getElementById("episode");
    let description = document.getElementById("description");
    let morceau = document.getElementById("morceau");
    let tags = document.getElementById("tags");
    let invite = document.getElementById("invite");

    newElement(launch.value, description.value, date.value, morceau.value, episode.value, tags.value, invite.value)
}

// #################### For Audio Podcast #################
let pButton = document.getElementById("playButton");

// Songs
let songs = ["1.mp3", "2.mp3"];

// Create Audio Object
let audio = new Audio();

// Set Source of Audio
audio.src = songs[0];

// Play Audio
// audio.play();

// Check Play Method
function checkPlay(){
    if (audio.paused){
        // play audio
        audio.play();

        // Set Audio Duration
        startTime.innerHTML = audio.duration * 100;

        // Change To Play Button
        pButton.setAttribute("class","fa fa-play");
            
        // For Check Working
        console.log("Audio Paused");
    }else{
        // Pause audio
        audio.pause();

        // Change To Play Button
        pButton.setAttribute("class","fa fa-pause");

        // For Check Working
        console.log("Audio Played");
    }
}

// Set Volume
function setvolume(){
    let rangeVolume = document.getElementById("rangeVolume");
    audio.volume = rangeVolume.value / 100;
}

// Set Volume By Default
let rangeVolume = document.getElementById("rangeVolume").value = 50;

// Set Start Time

// My Range (Slider Of AUdio)
let slider = document.getElementById("myRange");

audio.addEventListener('timeupdate', updatewaktu);

function updatewaktu(){
  let progress = audio.currentTime * (100/audio.duration);
  slider.value = progress;

  let startTime = document.getElementById("startTime");
  
  let minute = Math.floor(audio.currentTime/60);
  let second =  Math.floor(audio.currentTime - minute * 60);

  startTime.innerHTML = minute + ":" + second;

    // elpased time
    let elpasedMinute = Math.floor(audio.duration / 60);
    let elpasedSecond = Math.floor(audio.duration - elpasedMinute * 60);

    // Elpased 
    let elpased = document.getElementById("elapsedTime");
    elpased.innerHTML = elpasedMinute + ":" + elpasedSecond;
}

// Create a double linked list As node
class Node{
    constructor(data, next, previous){
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}

// Create a Queue
class Queue{
    constructor(){
        this.front = this.rear = this.bottom = null;
        this.size = 0;
    }

    // Next Method
    next(data){
        // If this bottom is not exists
        if(!songs[0]){
            // let front and rear and bottom points to the new node
            this.front = this.rear = this.bottom = new Node(data);
            return;
        }
        // create temp and store rear in it
        let temp = this.rear;
        
        // Let rear equal next rear and store the new node in it
        this.rear = this.rear.next = new Node(data);
        
        // and let previous rear point to temp
        this.rear.previous = temp;
    }
}

// Create Queue Object
let qu = new Queue();

// Next Function
function next(){
    qu.next();
}



var episode = ["soundtest.mp3", "soundtest2.mp3", "soundtest3.mp3"];

var audio = new audio();
audio.src = songs[0];

function new