console.log("welcome");
let songs = [
    {songName:"Levitating",filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Shape of You",filePath: "songs/2.mp3",coverPath: "covers/2.png"},
    {songName:"Perfect",filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName:"Sunflower",filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName:"Rockabye",filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName:"Baby",filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName:"Friends",filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName:"Senorita",filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName:"Love again",filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName:"Blinding lights",filePath: "songs/10.mp3",coverPath: "covers/10.jpg"},
]

let songIndex=0;
let audioElement=new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;      
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/2.mp3';
        // audioElement.currentTime=0;
        // audioElement.play(); 
})
});


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex=parseInt(e.target.id); 
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src=`songs/${songIndex+1}.mp3`;
//         // audioElement.src='songs/2.mp3';
//         audioElement.currentTime=0;
//         audioElement.play(); 
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>=9){
//         songIndex=0;
//     }
//     else{
//         songIndex+=1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play(); 
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex=9;
//     }
//     else{
//         songIndex-=1;
//     }
//     audioElement.src=`songs/${songIndex+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play(); 
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })