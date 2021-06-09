const music = document.querySelector("audio");
const img = document.querySelector('img');
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("previous");
const forward = document.getElementById("forward");


const songs =[
    {
        name:'1',
        title :'Jaan Ban Gaye',
        artist :'Arjit Singh',
    },
    {
        name:'2',
        title :'Jashn-E-Bahaaraa',
        artist :'Javed Akhtar',
    },
    {
        name:'3',
        title :'Dil ka Dariyaa',
        artist :'Arijit Singh',
    },

]
let isplaying = true;
const playmusic =()=>{
    isplaying=false;
    music.play();
    play.classList.replace('fa-play', 'fa-pause')
    img.classList.add('anime');  
};

const pausemusic =()=>{
    isplaying=true;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play')
    img.classList.remove('anime');  
     
};

play.addEventListener('click',()=>{
    if(isplaying){
        playmusic()
    }else{
        pausemusic()
    }
})

    //change data 
    const loadsongs =(songs)=>{
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src='ganna/' + songs.name + '.webm';
        img.src='images/' + songs.name + '.jpg';

    };
   // loadsongs(songs[1]);
   songindex=0

   const nextsong = ()=>{
       songindex = (songindex +1) % songs.length;
       loadsongs(songs[songindex]);
       playmusic();
   }
   const prevsong = ()=>{
    songindex = (songindex -1 + songs.length) % songs.length;
    loadsongs(songs[songindex]);
    playmusic();
}
    forward.addEventListener('click', nextsong);
    previous.addEventListener('click', prevsong);
