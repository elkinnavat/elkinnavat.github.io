function toggleAudio() {
    const audio = document.getElementById("wtfquehaceunmp3aqui");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


    const boton = document.getElementById('navos');
    // Agregar un evento de clic
    boton.onclick = function() {
        // Cambiar la ubicación actual a otra página
        window.location.href = "nabos.html";
    };


//BLOTWAREEEEEEE

//idiomas 
document.addEventListener("DOMContentLoaded", function() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        window.location.href = "index_en.html";
    }
});