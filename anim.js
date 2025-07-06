// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 { text: "I know just how to whisper", time: 17.2 },
  { text: "And I know just how to cry", time: 19.7 },
  { text: "I know just where to find the answers", time: 22.6 },
  { text: "And I know just how to lie", time: 26.1 },
  { text: "I know just how to fake it", time: 28.8 },
  { text: "And I know just how to scheme", time: 31.7 },
  { text: "I know just when to face the truth", time: 34.8 },
  { text: "And then I know just when to dream", time: 38.2 },
  { text: "And I know just where to touch you", time: 41.5 },
  { text: "And I know just what to prove", time: 44.8 },
  { text: "I know when to pull you closer", time: 48.0 },
  { text: "And I know when to let you loose", time: 51.9 },
  { text: "And I know the night is fading", time: 55.0 },
  { text: "And I know the time's gonna fly", time: 58.5 },
  { text: "And I'm never gonna tell you everything I gotta tell you", time: 62.6 },
  { text: "But I know I gotta give it a try", time: 67.3 },
  { text: "And I know the roads to riches", time: 70.9 },
  { text: "And I know the ways to fame", time: 74.5 },
  { text: "I know all the rules and then I know how to break 'em", time: 78.3 },
  { text: "And I always know the name of the game", time: 82.0 },
  { text: "But I don't know how to leave you", time: 85.9 },
  { text: "And I'll never let you fall", time: 89.7 },
  { text: "And I don't know how you do it", time: 93.3 },
  { text: "Making love out of nothing at all", time: 96.8 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
