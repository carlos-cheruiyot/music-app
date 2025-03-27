document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const songList = document.getElementById("songList");
    const playlistList = document.getElementById("playlistList");
    const audioPlayer = document.getElementById("audioPlayer");

    // Deezer API Base URLs
    const BASE_SEARCH_URL = "https://api.deezer.com/search?q=";
    const PLAYLIST_URL = "https://api.deezer.com/playlist/908622995"; // Replace with a valid playlist ID

// Function to search for songs
searchButton.addEventListener("click", function () {
    let query = searchInput.value.trim();
    if (!query) return alert("Please enter a song or artist name");

    fetch(`${BASE_SEARCH_URL}${query}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data.data);
        })
        .catch(error => console.error("Error fetching search results:", error));
});






