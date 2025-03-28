document.addEventListener("DOMContentLoaded", function () {
    const BASE_URL = "http://localhost:3000/songs"; // Base URL for JSON server

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const songList = document.getElementById("songList");
    const playlistList = document.getElementById("playlistList");
    const audioPlayer = document.getElementById("audioPlayer");

    let songsData = [];

    // Fetch songs from JSON server
    function fetchSongs() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                songsData = data;
                displayPlaylist(songsData);
            })
            .catch(error => console.error("Error fetching songs:", error));
    }

    // Display all songs in playlist
    function displayPlaylist(songs) {
        playlistList.innerHTML = "";
        songs.forEach(song => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${song.cover}" alt="Album Cover">
                <strong>${song.title}</strong> - ${song.artist}
                <button onclick="playSong('${song.preview}')">▶ Play</button>
            `;
            playlistList.appendChild(listItem);
        });
    }

    // Search for songs
    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value.toLowerCase();
        const filteredSongs = songsData.filter(song => 
            song.title.toLowerCase().includes(searchText) || 
            song.artist.toLowerCase().includes(searchText)
        );
        displaySearchResults(filteredSongs);
    });

    // Display search results
    function displaySearchResults(songs) {
        songList.innerHTML = "";
        songs.forEach(song => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${song.cover}" alt="Album Cover">
                <strong>${song.title}</strong> - ${song.artist}
                <button onclick="playSong('${song.preview}')">▶ Play</button>
            `;
            songList.appendChild(listItem);
        });
    }

    // Play a song
    window.playSong = function (previewUrl) {
        audioPlayer.src = previewUrl;
        audioPlayer.play();
    };

    // Fetch songs on page load
    fetchSongs();
});
