document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const songList = document.getElementById("songList");
    const playlistList = document.getElementById("playlistList");
    const audioPlayer = document.getElementById("audioPlayer");

    // Deezer API Base URLs
    const BASE_SEARCH_URL = "https://api.deezer.com/search?q=";
    const PLAYLIST_URL = "https://api.deezer.com/playlist/908622995"; 

    // Playlist details
    const playlistTitle = document.createElement("h2");
    const playlistDescription = document.createElement("p");
    const playlistImage = document.createElement("img");
    playlistContainer.prepend(playlistImage, playlistTitle, playlistDescription);






});
