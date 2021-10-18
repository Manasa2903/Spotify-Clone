let sideBarNameContainer = document.getElementById("sidebar-name");
let sideBarNameContainer1 = document.getElementById("sidebar-name1");
let sideBarNameContainer2 = document.getElementById("sidebar-name2");
let sideBarNameContainer3 = document.getElementById("sidebar-name3");
let sideBarNameContainer4 = document.getElementById("sidebar-name4");
let sideBarNameContainer5 = document.getElementById("sidebar-name5");
let audioElement = new Audio('Songs/Aanandam Madike.mp3');
let mainPlay = document.getElementById('mainPlay');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let myProgressBar = document.getElementById('myProgressBar');
let songIndex = 0;
let mainSongName = document.getElementById('mainSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let playlistContainer = document.getElementById("playlist-container");
let playlist = document.getElementById("playlist");
let playNum = 1;
playlist.onclick = function() {
    playNum += 1;
    let playlistItem = document.createElement("p");
    playlistItem.classList.add("my-playlist")
    playlistContainer.appendChild(playlistItem);
    playlistItem.textContent = "My Playlist #" + playNum;
}
sideBarNameContainer.onclick = function() {
    /* sideBarNameContainer.classList.add("bg-color")
     sideBarNameContainer1.style.backgroundColor = "";
     sideBarNameContainer2.style.backgroundColor = "";
     sideBarNameContainer3.style.backgroundColor = "";
     sideBarNameContainer4.style.backgroundColor = "";*/
    sideBarNameContainer.style.color = "white";
    sideBarNameContainer1.style.color = "#b3b3b3";
    sideBarNameContainer2.style.color = "#b3b3b3";
    sideBarNameContainer3.style.color = "#b3b3b3";
    sideBarNameContainer4.style.color = "#b3b3b3";
    sideBarNameContainer5.style.color = "#b3b3b3";
}

sideBarNameContainer1.onclick = function() {
    // sideBarNameContainer1.style.backgroundColor = "#282828";
    // sideBarNameContainer2.style.backgroundColor = "";
    // sideBarNameContainer3.style.backgroundColor = "";
    // sideBarNameContainer4.style.backgroundColor = "";
    // sideBarNameContainer.style.backgroundColor = "";
    sideBarNameContainer1.style.color = "white";
    sideBarNameContainer.style.color = "#b3b3b3";
    sideBarNameContainer2.style.color = "#b3b3b3";
    sideBarNameContainer3.style.color = "#b3b3b3";
    sideBarNameContainer4.style.color = "#b3b3b3";
    sideBarNameContainer5.style.color = "#b3b3b3";
}
sideBarNameContainer2.onclick = function() {
    // sideBarNameContainer2.style.backgroundColor = "#282828";
    // sideBarNameContainer1.style.backgroundColor = "";
    // sideBarNameContainer3.style.backgroundColor = "";
    // sideBarNameContainer4.style.backgroundColor = "";
    // sideBarNameContainer.style.backgroundColor = "";
    sideBarNameContainer2.style.color = "white";
    sideBarNameContainer1.style.color = "#b3b3b3";
    sideBarNameContainer.style.color = "#b3b3b3";
    sideBarNameContainer3.style.color = "#b3b3b3";
    sideBarNameContainer4.style.color = "#b3b3b3";
    sideBarNameContainer5.style.color = "#b3b3b3";
}
sideBarNameContainer3.onclick = function() {
    // sideBarNameContainer3.style.backgroundColor = "#282828";
    // sideBarNameContainer1.style.backgroundColor = "";
    // sideBarNameContainer2.style.backgroundColor = "";
    // sideBarNameContainer4.style.backgroundColor = "";
    // sideBarNameContainer.style.backgroundColor = "";
    sideBarNameContainer3.style.color = "white";
    sideBarNameContainer1.style.color = "#b3b3b3";
    sideBarNameContainer2.style.color = "#b3b3b3";
    sideBarNameContainer.style.color = "#b3b3b3";
    sideBarNameContainer4.style.color = "#b3b3b3";
    sideBarNameContainer5.style.color = "#b3b3b3";
}
sideBarNameContainer4.onclick = function() {
    // sideBarNameContainer4.style.backgroundColor = "#282828";
    // sideBarNameContainer1.style.backgroundColor = "";
    // sideBarNameContainer2.style.backgroundColor = "";
    // sideBarNameContainer3.style.backgroundColor = "";
    // sideBarNameContainer.style.backgroundColor = "";
    sideBarNameContainer4.style.color = "white";
    sideBarNameContainer1.style.color = "#b3b3b3";
    sideBarNameContainer2.style.color = "#b3b3b3";
    sideBarNameContainer3.style.color = "#b3b3b3";
    sideBarNameContainer.style.color = "#b3b3b3";
    sideBarNameContainer5.style.color = "#b3b3b3";
}

sideBarNameContainer5.onclick = function() {
    // sideBarNameContainer5.style.backgroundColor = "#282828";
    // sideBarNameContainer1.style.backgroundColor = "";
    //sideBarNameContainer4.style.backgroundColor = "";
    // sideBarNameContainer2.style.backgroundColor = "";
    // sideBarNameContainer3.style.backgroundColor = "";
    // sideBarNameContainer.style.backgroundColor = "";
    sideBarNameContainer5.style.color = "white";
    sideBarNameContainer1.style.color = "#b3b3b3";
    sideBarNameContainer2.style.color = "#b3b3b3";
    sideBarNameContainer4.style.color = "#b3b3b3";
    sideBarNameContainer3.style.color = "#b3b3b3";
    sideBarNameContainer.style.color = "#b3b3b3";
}



let songs = [
    { songName: "Aanandam Madike", songPath: "../Songs/Aanandam Madike.mp3", imgSrc: "https://i.scdn.co/image/ab67616d0000b273f4c61005291ef9953dac7d82" },
    { songName: "Saranga Dariya", songPath: "../Songs/SarangaDariya.mp3", imgSrc: "https://pbs.twimg.com/media/EvXz7QTVgAAq8XU.jpg" },
    { songName: "Leharaayi", songPath: "../Songs/Leharaayi.mp3", imgSrc: "https://sensongsmp3.tv/wp-content/uploads/2021/09/Most-Eligible-Bachelor-songs-download-akhil-akkineni-pooja-hegde-2021-telugu-movie-.jpeg" },
    { songName: "Srivalli", songPath: "../Songs/Srivalli.mp3", imgSrc: "https://naasongs.com/wp-content/uploads/2021/10/Pushpa-The-Raise-2021-Srivalli-FM-250x250.jpg" },
    { songName: "Chukkala Chunni", songPath: "../Songs/Chukkala Chunni.mp3", imgSrc: "https://naasongs.to/wp-content/uploads/2020/11/SR-Kalyanamandapam-2020-Chukkala-Chunni-250x250.jpg" },
    { songName: "Nee Chithram Choosi", songPath: "../Songs/Nee Chitram Choosi.mp3", imgSrc: "https://naalyrics.com/wp-content/uploads/2021/02/Nee-Chithram-choosu.jpg" },
    { songName: "Samajavaragamana", songPath: "../Songs/Samajavaragamana.mp3", imgSrc: "https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bA4AoE4W0/size_xxl_1569643099.webp" },

    { songName: "Buttabomma", songPath: "../Songs/Buttabomma.mp3", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Butta_Bomma.jpg/220px-Butta_Bomma.jpg" },

    { songName: "OMG Daddy", songPath: "../Songs/OMG Daddy.mp3", imgSrc: "https://a10.gaanacdn.com/gn_img/song/zLp36PvbrG/p36Lg7EDbr/size_xxl_1574418287.webp" },
    { songName: "Ala Vaikuntapuramlo", songPath: "../Songs/Ala Vaikunthapurramuloo.mp3", imgSrc: "https://1.bp.blogspot.com/-biLUBWmQpG4/XVtrRFY_z1I/AAAAAAAAIl8/M2FqhiZVsAg4adAtvOBF91PX6V7sTFAgQCLcBGAs/s1600/IMG_20190820_090758.jpg" },
    { songName: "Sittharala Sirapadu", songPath: "../Songs/Sittharala Sirapadu.mp3", imgSrc: "https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/4w3vEn7pKj/size_l_1578660405.webp" },
    {
        songName: "Ramulo Ramula",
        songPath: "../Songs/Ramuloo Ramula.mp3",
        imgSrc: "https://3.bp.blogspot.com/-6dUTYWtZtDQ/XcBT5ni-5bI/AAAAAAAACAU/qXPOoF5qHG0qgi2oBDVqP0yYFWK2IEftgCLcBGAsYHQ/s1600/ramulo-ramula-dj-ajay-hyd.jpg"
    },
    {
        songName: "He's Soo Cute",
        songPath: "../Songs/He’s Soo Cute.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/song/koMWQ7BKqL/MWQv0M4Abq/size_xxl_1576493421.webp"
    },
    {
        songName: "Mind Block",
        songPath: "../Songs/Mind Block.mp3",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpB5zdO769_YhDtKzGAxcEkdN0jwUUqfTRg&usqp=CAU"
    },
    {
        songName: "Suryudivo Chandrudivo",
        songPath: "../Songs/Suryudivo Chandrudivo.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/song/ogNWkDbmXJ/NWk0DrlJbm/size_xxl_1575972593.webp"
    },
    {
        songName: "Sarileru Anthem",
        songPath: "../Songs/Sarileru Neekevvaru Anthem.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXe4Dx3m/size_xxl_1578314524.webp"
    },
    {
        songName: "Daang Daang",
        songPath: "../Songs/Daang Daang.mp3",
        imgSrc: "http://a10.gaanacdn.com/images/song/25/29183325/crop_480x480_1577706445.jpg"
    },
    {
        songName: "Tribute To Indian Army",
        songPath: "../Songs/A Tribute To The Indian Army.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/song/JD2KJyAbOL/2KJmqMP1bO/size_xxl_1565972476.webp"
    },
    {
        songName: "FRIENDS",
        songPath: "../Songs/friends.mp3",
        imgSrc: "https://m.media-amazon.com/images/M/MV5BNmY0OWFlMzYtMDNkZC00YTdhLWI4ZWEtM2I5OWZlYzVkNGQzXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
    },
    {
        songName: "Closer",
        songPath: "../Songs/Closer.mp3",
        imgSrc: "https://i1.sndcdn.com/artworks-000181062702-17yavc-t500x500.jpg"
    },
    {
        songName: "Attention",
        songPath: "../Songs/Attention.mp3",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png"
    },
    {
        songName: "Let me love you",
        songPath: "../Songs/Let me love you.mp3",
        imgSrc: "https://www.songmeaningsandfacts.com/wp-content/uploads/2019/05/Justin-Bieber-Let-Me-Love-You.png"
    },
    {
        songName: "Believer",
        songPath: "../Songs/Believer.mp3",
        imgSrc: "https://images.hungama.com/c/1/f19/72a/26069154/26069154_300x300.jpg"
    },
    {
        songName: "Cheap Thrills",
        songPath: "../Songs/Cheap Thrills.mp3",
        imgSrc: "https://www.theedgesusu.co.uk/wp-content/uploads/2015/12/cover1400x1400-e1450541747497.jpeg"
    },
    {
        songName: "Leja Re",
        songPath: "../Songs/Leja Re.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/7vKXawvV3m/size_xxl_1543033357.webp"
    },
    {
        songName: "Jab Koi Baat",
        songPath: "../Songs/Jab Koi Baat.mp3",
        imgSrc: "https://a10.gaanacdn.com/gn_img/albums/qa4WEqWP1p/a4WE2PPGbP/size_xxl_1517924239.webp"
    },
    {
        songName: "Manwa Laage",
        songPath: "../Songs/Manwa Laage.mp3",
        imgSrc: "https://www.meinstyn.com/wp-content/uploads/2017/02/Happy-New-Year-Movie-Poster-Shahrukh-Khan-Deepika-Padukone-Full-HD-Wallpaper.jpg"
    },
    {
        songName: "Kuch To Hai",
        songPath: "../Songs/Kuch To Hai.mp3",
        imgSrc: "https://i1.sndcdn.com/artworks-000231507318-twg6dl-t500x500.jpg"
    },
    {
        songName: "Guzarish",
        songPath: "../Songs/Guzarish.mp3",
        imgSrc: "https://pagalnew.com/coverimages/Guzarish-Ghajini-500-500.jpg"
    },
    {
        songName: "Dekhte Dekhte",
        songPath: "../Songs/Dekhte Dekhte.mp3",
        imgSrc: "http://a10.gaanacdn.com/images/song/44/24203644/crop_480x480_1536318443.jpg"
    },

]

audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (audioElement.currentTime == audioElement.duration) {
        songIndex += 1;
        audioElement.src = songs[songIndex].songPath;
        mainSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
    }
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].imgSrc;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        mainPlay.classList.add('fa-pause-circle');
        mainPlay.classList.remove('fa-play-circle');
        audioElement.src = songs[i].songPath;
        mainSongName.textContent = songs[i].songName;
        audioElement.currentTime = 0;
        songIndex = i;
        audioElement.play();
    })
})

mainPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mainPlay.classList.remove('fa-play-circle');
        mainPlay.classList.add('fa-pause-circle');

    } else {
        audioElement.pause();
        mainPlay.classList.remove('fa-pause-circle');
        mainPlay.classList.add('fa-play-circle');

    }
})

next.addEventListener('click', () => {
    if (songIndex + 1 == songs.length) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].songPath;
    mainSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');

})

previous.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].songPath;
    mainSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
})