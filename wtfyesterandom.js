function toggleAudio() {
    const audio = document.getElementById("wtfquehaceunmp3aqui");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        window.location.href = "index_en.html";
    }
});