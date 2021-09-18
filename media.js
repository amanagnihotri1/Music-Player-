var sartist=document.getElementById("songartist");
var stitle=document.getElementById("songtitle");
var sposter=document.querySelector(".artist-poster");
var slider=document.getElementById("myRange");
var output=document.getElementById("start");
var next=document.querySelector(".music-next");
var previous=document.querySelector(".music-previous");
var endtimer=document.getElementById("end");
var maudio=document.getElementById("mplayer");
var musicbutton=document.getElementById("music-img");
var volumeslider=document.getElementById("vslide");
var modeslider=document.getElementById("modeslider");
var modetitle=document.getElementById("mode-title");
var sliderimage=document.getElementById("imgswitch");

var isplaying=false;
const songs=[
  {
    name:"song2",
    title:"Stay",
    artist:"Justin Beiber",
  },
  {
   name:"song4",
   title:"Harry Styles ",
   artist:"Watermelon Sugar",
  },
  {
    name:"song3",
    title:"Falling",
    artist:"Trevor Daniel",
  },
  {
    name:"song1",
    title:"Save Me SOS",
    artist:"DJ Goja",
  },
];

const playmusic =function()
{  isplaying=true;
  maudio.play(); 
 var a=Math.floor((maudio.duration)/60);
 var b=Math.floor((maudio.duration) % 60);
 endtimer.innerHTML="0"+a+":"+b;
 musicbutton.src="https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/pause-button.png";
 
 
}
const pausemusic =function()
{
 isplaying=false;
 maudio.pause();
 musicbutton.src="https://www.pngall.com/wp-content/uploads/5/Play-Button-PNG-High-Quality-Image.png";

}
musicbutton.addEventListener("click",function()
{
 isplaying ? pausemusic():playmusic();
});
document.getElementById("vslide").addEventListener("change",(e)=>
{
  
maudio.volume=e.currentTarget.value/100;
});
const loadsong=(songs)=>
{

stitle.textContent=songs.title;
sartist.textContent=songs.artist;
maudio.src="music/"+songs.name+ ".mp3";
sposter.src="images/"+songs.name+".jpg";

}
var songIndex=0;
const nextSong=function()
{ songIndex=(songIndex+1)% songs.length;
  loadsong(songs[songIndex]);
  maudio.autoplay=true;
}
const previousSong=()=>
{songIndex--;
  loadsong(songs[songIndex]);
  maudio.autoplay=true;
}
function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
next.addEventListener("click",nextSong);
previous.addEventListener("click",previousSong);
maudio.addEventListener("timeupdate",function(e)
{ 
  if(maudio.duration)
  {
    const progressPercent = Math.floor(
      (maudio.currentTime / maudio.duration) * 100
    );
    slider.value = progressPercent;
    output.innerHTML=slider.value;
  }
  output.innerHTML=formatTime(maudio.currentTime);
});
slider.onchange = function (e) {
  const seekTime = (maudio.duration / 100) * e.target.value;
  maudio.currentTime = seekTime;
};
modeslider.addEventListener("click",function()
{ 
  if(sliderimage.src=="https://cdn0.iconfinder.com/data/icons/ecommerce-vol-2-solid/32/Interface_ui_ecommerce-38-512.png")
  {
  sliderimage.src="https://cdn.iconscout.com/icon/free/png-256/night-mode-2-475098.png";
 document.body.style.backgroundColor="#150050";  
modetitle.innerHTML="Light";  
}
  else
  {
     sliderimage.src="https://cdn0.iconfinder.com/data/icons/ecommerce-vol-2-solid/32/Interface_ui_ecommerce-38-512.png";
     document.body.style.backgroundColor="#dcd8e7";
 modetitle.innerHTML="Dark";
    }

});